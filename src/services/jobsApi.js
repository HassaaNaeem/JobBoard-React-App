async function fetchJobs() {
  const params = new URLSearchParams();

  const res = await fetch(`http://localhost:3001/jobs?`);
  const data = await res.json();

  return data;
}

export default fetchJobs;
