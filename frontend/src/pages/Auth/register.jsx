import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const formRef = useRef(null);
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      mail: formData.get("mail"),
      password: formData.get("password"),
      username: formData.get("username"),
    };

    console.log(data);
    setButtonDisabled(true);

    if (true) {
      router.push("/Auth");
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Typography variant="h4">Register</Typography>
        <TextField
          helperText="Enter your mail"
          id="mail"
          label="Mail"
          name="mail"
          type="email"
          required
        />
        <TextField
          helperText="Enter enter your password"
          type="password"
          id="password"
          label="Password"
          name="password"
          required
        />

        <TextField
          helperText="Enter your username"
          id="username"
          label="Username"
          name="username"
          maxLength={6}
          required
        />
        <Button
          type="submit"
          variant="filled"
          color="primary"
          disabled={buttonDisabled}
        >
          Create account
        </Button>
      </Box>
    </form>
  );
};

export default Register;
