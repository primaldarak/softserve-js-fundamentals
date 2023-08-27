function personalmodule(username) {
  const date = new Date();
  const dateStr = `${date}`;
  const dateOfRequest = dateStr.slice(0, 34);
  if (date.getHours() >= 8 && date.getHours() <= 12) {
    return `<p>Date of request: ${dateOfRequest}</p> <p>Good morning, ${username}</p>`;
  } else if (date.getHours() > 12 && date.getHours() < 18) {
    return `<p>Date of request: ${dateOfRequest}</p> <p>Good day, ${username}</p>`;
  } else if (date.getHours() > 18 && date.getHours() < 24) {
    return `<p>Date of request: ${dateOfRequest}</p> <p>Good evening, ${username}</p>`;
  } else if (date.getHours() > 0 && date.getHours() < 8) {
    return `<p>Date of request: ${dateOfRequest}</p> <p>Good night, ${username}</p>`;
  }
}

exports.personalmodule = personalmodule;
