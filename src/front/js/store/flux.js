const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      registro: false,
    },
    actions: {
      // Registro
      registro: (nombre, apellidos, email, password, artista) => {
        try {
          // fetching data from the backend
          fetch(process.env.BACKEND_URL + "/api/registration", {
            method: "POST",
            body: JSON.stringify({
              nombre: nombre,
              apellido: apellidos,
              email: email,
              password: password,
              artista: artista,
              dni: null,
              nacimiento: null,
              foto_usuario: null,
              descripcion: null,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((response) => {
            if (response.status === 200) {
              setStore({
                registro: true,
              });
            }
            response.json();
            setStore({
              registro: false,
            });
          });
        } catch (Ferror) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
