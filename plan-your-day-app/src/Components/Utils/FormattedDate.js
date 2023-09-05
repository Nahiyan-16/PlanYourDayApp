function FormattedDate() {
  const formatDate = () => {
    const date = new Date();
    
    const day = date.getDate();
    const daySuffix = getDaySuffix(day);
    const month = date.getMonth();

    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

    return `${months[month]} ${day}${daySuffix}, ${date.getFullYear()}`;
  };

  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const formattedDate = formatDate();

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default FormattedDate;