const API = "http://192.168.0.239:3000/transac";

export const getTransac = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const saveTransac = async (newTransac) => {
  await fetch(API, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newTransac),
  });
};

export const deleteTran = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const getTrans = async () => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};
