const calculateHealth = (
  critical,
  high,
  totalIssues
) => {
  const score =
    100 -
    critical * 20 -
    high * 10 -
    totalIssues * 2;

  return Math.max(score, 0);
};

export default calculateHealth;