import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutLinedIcon from "@mui/icons-material/AssignmentInd";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { AssignmentInd } from "@mui/icons-material";
import api from '../axios/axios';

function Cadastro() {
  const [user, setUser] = useState({
    cpf: "",
    email: "",
    password: "",
    name: "",
    data_nascimento: "2000-06-10"
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (user.age <= 0){
    //     return alert("Insira uma idade válida");
    // }
    cadastro();
    alert(
      "Email: " +
        user.email +
        "\n" +
        "Senha: " +
        user.password +
        "\n" +
        "data de nascimento: " +
        user.data_nascimento +
        "\n" +
        "Nome: " +
        user.name +
        "\n" +
        "CPF: " +
        user.cpf
    );
  };

  async function cadastro(){
    await api.postCadastro(user).then(
        (response)=>{
            alert(response.data.message);
        },
        (error)=>{
            console.log(error);
            alert(error.response.data.error);
        }
    )
  }


  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ margin: 1, backgroundColor: "#FFA500" }}>
          <AssignmentInd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        {/*"mt' é a abreviação de "margintop"*/}
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="email"
            margin="normal"
            value={user.email}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            margin="normal"
            type="password"
            value={user.password}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="data_nascimento"
            label="Data de nascimento"
            name="data_nascimento"
            margin="normal"
            type="date"
            value={user.data_nascimento}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="name"
            label="Nome"
            name="name"
            margin="normal"
            value={user.name}
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            margin="normal"
            value={user.cpf}
            onChange={onChange}
          />

          <Button
            sx={{ mt: 3, mb: 2, backgroundColor: "#FFA500" }}
            fullWidth
            type="submit"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Cadastro;
