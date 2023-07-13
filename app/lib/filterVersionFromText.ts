function groupData(data) {
  let groupedData = {};
  let isVersionAvailable = false;
  data.forEach((item) => {
    if (item.version) {
      if (!groupedData[item.version]) {
        groupedData[item.version] = [];
      }
      groupedData[item.version].push(item);
      isVersionAvailable = true;
    } else {
      groupedData = item;
      isVersionAvailable = false;
    }
  });

  return {
    groupedData,
    isVersionAvailable,
  };
}

export default groupData;