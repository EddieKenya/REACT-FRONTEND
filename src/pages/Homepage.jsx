import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import GlobalStyles from "@mui/material/GlobalStyles";
import "../components/styles/home.css";
import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";

function PricingContent() {
  const [posts, setPost] = useState(null);

  useEffect(()=>{
    fetch('https://web-production-4c02.up.railway.app/api/list/')
      .then(res =>{
         return res.json()
      })
      .then(data=>{
        setPost(data)
      });
  },[])
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            React + Django Restful api
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              to="/logOut"
              sx={{ my: 1, mx: 1.5 }}
            >
              LogOut
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <div className="documents">
        {posts && <Post  posts={posts}/>}
          
      </div>
    </React.Fragment>
  );
}

export default function HomePage() {
  return <PricingContent />;
}
