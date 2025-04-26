export const formatDate = dateString => {
  const d = new Date(dateString);

  return d.toLocaleString('en-CA', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  });
};
