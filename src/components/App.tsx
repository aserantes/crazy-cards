import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import { User } from "../constants";
import { Results } from "./Results";
import { Form } from "./Form";

export function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <CssBaseline />

      <Container maxWidth="sm">
        <AppBar
          position="static"
          color="secondary"
          style={{ marginBottom: 32, padding: 12 }}
        >
          <Typography variant="h4">
            <strong>Crazy Cards</strong>
          </Typography>
        </AppBar>
        {!user && <Form onSubmit={setUser} />}
        {user && <Results user={user} />}
      </Container>
    </>
  );
}
