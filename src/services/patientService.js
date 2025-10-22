let nextId = 100;

const dataSeed = [
  { id: 1, name: "Ramesh Kumar", age: "34", condition: "Diabetes" },
  { id: 2, name: "Sita Devi", age: "28", condition: "Flu" },
  { id: 3, name: "Ajay Singh", age: "45", condition: "Hypertension" },
];

async function fetchPatients() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dataSeed.slice().reverse();
}

async function addPatient(newData) {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const newPatient = { id: ++nextId, ...newData };
  dataSeed.push(newPatient);
  return newPatient;
}

export { fetchPatients, addPatient };
