import { useState, useRef, useEffect } from "react";
import { useFetcher } from "@remix-run/react";
import { Button } from "flowbite-react";
const AudioRecorder = () => {
  const audioFetcher = useFetcher();
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const mimeType = "audio/webm";
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };
  const startRecording = async () => {
    setRecordingStatus("recording");
    handleStart();
    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { mimeType });
    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;
    //invokes the start method to start the recording process
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = () => {
    handlePauseResume();
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      onStop(audioBlob);
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };
  const onStop = (blob) => {
    let data = new FormData();
    handleReset();
    data.append("type", "composer");
    data.append("file", blob, "recording.wav");

    // audioFetcher.submit(data, {
    //   method: "post",
    //   encType: "multipart/form-data",
    // });
  };
  useEffect(() => {
    getMicrophonePermission();
  }, []);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <div className="flex justify-center items-center gap-3 flex-col">
      <h2>Audio Recorder</h2>
      <br />
      {audio ? (
        <>
          <div className="audio-container flex items-center gap-3">
            <audio src={audio} controls></audio>
            <a download href={audio}>
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
                  d="M3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17ZM6.293 9.293C6.48053 9.10553 6.73484 9.00021 7 9.00021C7.26516 9.00021 7.51947 9.10553 7.707 9.293L9 10.586V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V10.586L12.293 9.293C12.3852 9.19749 12.4956 9.12131 12.6176 9.0689C12.7396 9.01649 12.8708 8.9889 13.0036 8.98775C13.1364 8.9866 13.2681 9.0119 13.391 9.06218C13.5139 9.11246 13.6255 9.18671 13.7194 9.28061C13.8133 9.3745 13.8875 9.48615 13.9378 9.60905C13.9881 9.73194 14.0134 9.86362 14.0123 9.9964C14.0111 10.1292 13.9835 10.2604 13.9311 10.3824C13.8787 10.5044 13.8025 10.6148 13.707 10.707L10.707 13.707C10.5195 13.8945 10.2652 13.9998 10 13.9998C9.73484 13.9998 9.48053 13.8945 9.293 13.707L6.293 10.707C6.10553 10.5195 6.00021 10.2652 6.00021 10C6.00021 9.73484 6.10553 9.48053 6.293 9.293V9.293Z"
                  fill="#111928"
                />
              </svg>
            </a>
          </div>
          <div className="flex justify-around gap-3 ">
            <Button size="xs" color="" className="bg-green-400 text-white">
              upload
            </Button>
            <Button
              className="bg-gray-200 text-black"
              color=""
              onClick={() => setAudio(null)}
              size="xs"
            >
              cancel
            </Button>
          </div>
        </>
      ) : null}
      <main>
        <div className="audio-controls">
          {!permission ? (
            <button
              onClick={getMicrophonePermission}
              type="button"
              className="bg-red-300"
            >
              Get Microphone
            </button>
          ) : null}
          {permission && recordingStatus === "inactive" && !audio ? (
            <button
              onClick={startRecording}
              type="button"
              title="record"
              className="fill-gray-500 hover:fill-red-500 hover:animate-pulse"
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
          {recordingStatus === "recording" ? (
            <>
              <div className="timer flex gap-3">
                <svg
                  className="animate-pulse"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 4C7 3.20435 7.31607 2.44129 7.87868 1.87868C8.44129 1.31607 9.20435 1 10 1C10.7956 1 11.5587 1.31607 12.1213 1.87868C12.6839 2.44129 13 3.20435 13 4V8C13 8.79565 12.6839 9.55871 12.1213 10.1213C11.5587 10.6839 10.7956 11 10 11C9.20435 11 8.44129 10.6839 7.87868 10.1213C7.31607 9.55871 7 8.79565 7 8V4ZM11 14.93C12.6662 14.6893 14.1899 13.8562 15.2918 12.5835C16.3938 11.3107 17.0002 9.68351 17 8C17 7.73478 16.8946 7.48043 16.7071 7.29289C16.5196 7.10536 16.2652 7 16 7C15.7348 7 15.4804 7.10536 15.2929 7.29289C15.1054 7.48043 15 7.73478 15 8C15 9.32608 14.4732 10.5979 13.5355 11.5355C12.5979 12.4732 11.3261 13 10 13C8.67392 13 7.40215 12.4732 6.46447 11.5355C5.52678 10.5979 5 9.32608 5 8C5 7.73478 4.89464 7.48043 4.70711 7.29289C4.51957 7.10536 4.26522 7 4 7C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8C2.99978 9.68351 3.6062 11.3107 4.70815 12.5835C5.81011 13.8562 7.33379 14.6893 9 14.93V17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H14C14.2652 19 14.5196 18.8946 14.7071 18.7071C14.8946 18.5196 15 18.2652 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17H11V14.93Z"
                    className="fill-red-700"
                  />
                </svg>
                <div>
                  <span className="digits">
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                  </span>
                  <span className="digits">
                    {parseInt(
                      ("0" + Math.floor((time / 1000) % 60)).slice(-2)
                    ) + 3}{" "}
                    :
                  </span>
                  <span className="digits mili-sec">
                    {("0" + ((time / 10) % 100)).slice(-2)}
                  </span>
                </div>
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
        {audioFetcher.error && (
          <div className="text-red-500">{audioFetcher.error}</div>
        )}
        {audioFetcher.data && (
          <div className="text-green-500">{audioFetcher.data?.data?.url}</div>
        )}
        {}
      </main>
    </div>
  );
};
export default AudioRecorder;
