import { useState, useRef, useEffect } from "react";
import { useFetcher, useOutletContext, useLoaderData } from "@remix-run/react";
import { useRecoilState } from "recoil";
import { audioPermission } from "~/states";
import { formatTime } from "./lib/formatTime";
const AudioRecorder = ({ setAudio }) => {
  const [permission, setPermission] = useRecoilState(audioPermission);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    let intervalId;
    if (recordingStatus === "recording") {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [recordingStatus]);

  // const mimeType = "audio/wav";
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        return streamData;
      } catch (err) {
        alert(err.message);
        return false;
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };
  let localAudioChunks = [];
  const startRecording = async () => {
    let stream = await getMicrophonePermission();
    if (stream) {
      setRecordingStatus("recording");

      //create new Media recorder instance using the stream
      const media = new MediaRecorder(stream);
      //set the MediaRecorder instance to the mediaRecorder ref
      mediaRecorder.current = media;
      //invokes the start method to start the recording process
      mediaRecorder.current.start();
      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localAudioChunks.push(event.data);
      };
      setAudioChunks(localAudioChunks);
    }
  };
  const pauseRecording = async () => {
    setRecordingStatus("paused");
    mediaRecorder.current.pause();
  };
  const handleResume = async () => {
    setRecordingStatus("recording");
    mediaRecorder.current.start();
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio({ blob: audioBlob, tempUrl: audioUrl });

      //creates a playable URL from the blob file.
      setAudioChunks([]);
    };
  };

  return (
    <div className="flex justify-center items-center gap-3 flex-col">
      <div className="audio-controls">
        {recordingStatus === "inactive" ? (
          <button
            onClick={startRecording}
            type="button"
            title="record"
            className="fill-gray-500 hover:fill-red-500 bg-gray-100 rounded-full p-2 "
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 4C7 3.20435 7.31607 2.44129 7.87868 1.87868C8.44129 1.31607 9.20435 1 10 1C10.7956 1 11.5587 1.31607 12.1213 1.87868C12.6839 2.44129 13 3.20435 13 4V8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8V4ZM11 14.93C12.6662 14.6893 14.1899 13.8562 15.2918 12.5835C16.3938 11.3107 17.0002 9.68351 17 8C17 7.73478 16.8946 7.48043 16.7071 7.29289C16.5196 7.10536 16.2652 7 16 7C15.7348 7 15.4804 7.10536 15.2929 7.29289C15.1054 7.48043 15 7.73478 15 8C15 9.32608 14.4732 10.5979 13.5355 11.5355C12.5979 12.4732 11.3261 13 10 13C8.67392 13 7.40215 12.4732 6.46447 11.5355C5.52678 10.5979 5 9.32608 5 8C5 7.73478 4.89464 7.48043 4.70711 7.29289C4.51957 7.10536 4.26522 7 4 7C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8C2.99978 9.68351 3.6062 11.3107 4.70815 12.5835C5.81011 13.8562 7.33379 14.6893 9 14.93V17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H14C14.2652 19 14.5196 18.8946 14.7071 18.7071C14.8946 18.5196 15 18.2652 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17H11V14.93Z"
              />
            </svg>
          </button>
        ) : null}
        {recordingStatus === "paused" && (
          <button onClick={handleResume}>resume</button>
        )}
        {recordingStatus === "recording" ? (
          <>
            <div className="timer flex gap-3">
              <svg
                className="animate-pulse bg-gray-100 rounded-full"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={pauseRecording}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 4C7 3.20435 7.31607 2.44129 7.87868 1.87868C8.44129 1.31607 9.20435 1 10 1C10.7956 1 11.5587 1.31607 12.1213 1.87868C12.6839 2.44129 13 3.20435 13 4V8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8V4ZM11 14.93C12.6662 14.6893 14.1899 13.8562 15.2918 12.5835C16.3938 11.3107 17.0002 9.68351 17 8C17 7.73478 16.8946 7.48043 16.7071 7.29289C16.5196 7.10536 16.2652 7 16 7C15.7348 7 15.4804 7.10536 15.2929 7.29289C15.1054 7.48043 15 7.73478 15 8C15 9.32608 14.4732 10.5979 13.5355 11.5355C12.5979 12.4732 11.3261 13 10 13C8.67392 13 7.40215 12.4732 6.46447 11.5355C5.52678 10.5979 5 9.32608 5 8C5 7.73478 4.89464 7.48043 4.70711 7.29289C4.51957 7.10536 4.26522 7 4 7C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8C2.99978 9.68351 3.6062 11.3107 4.70815 12.5835C5.81011 13.8562 7.33379 14.6893 9 14.93V17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H14C14.2652 19 14.5196 18.8946 14.7071 18.7071C14.8946 18.5196 15 18.2652 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17H11V14.93Z"
                  className="fill-red-700"
                />
              </svg>
              <div>{formatTime(timer)} recording...</div>
              <button onClick={stopRecording} type="button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM8 7C7.73478 7 7.48043 7.10536 7.29289 7.29289C7.10536 7.48043 7 7.73478 7 8V12C7 12.2652 7.10536 12.5196 7.29289 12.7071C7.48043 12.8946 7.73478 13 8 13H12C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7H8Z"
                    fill="#111928"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default AudioRecorder;
