import React, { useState } from 'react';
import Button from '../../components/Button';
import { useRouter } from 'next/router';
import TextInput from '../../components/TextInput';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import FirstLoginMessage from '../../components/FirstLoginMessage'

const Login: React.FC = () => {
    const router = useRouter()

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
      let res = await fetch('api/auth', {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      })
      let data = await res.json()

      if(data.status === true) {
        await localStorage.setItem("token", data.token)
        console.log(data.message)
      } else {
        console.log(data.message)
      }
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#E3F2FD",
          }}>
            <FirstLoginMessage show={true}/>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              width: 1000,
              height: 550,
              padding: 70,
              borderRadius: 10,
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
            }}>
              <h2 style={{
                fontSize: 38,
                fontWeight: 'bold',
              }}>Fazer Login</h2>
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 50,
              }}>
                <p style={{
                  margin: "14px 0",
                  fontSize: 16,
                }}>Não possui uma conta?</p>
                <span 
                  onClick={()=>router.push('/RegisterPersonInfo')}
                  style={{
                    textDecoration: "underline",
                    color: "#009FB7",
                    marginLeft: 12,
                    cursor: "pointer"
                  }}>Cadastre-se</span>
              </div>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 200,
              }}>
                <TextInput 
                  value={login}
                  callback={(e)=>setLogin(e.target.value)}
                  placeholder="Login"
                  margin="0 0 30px"
                  icon={<PersonIcon style={{
                    width: 30,
                    height: 30,
                  }}/>}
                />
                <TextInput
                  type="password"
                  value={password}
                  callback={(e)=>setPassword(e.target.value)}
                  placeholder="Senha"
                  margin="0 0 30px"
                  icon={<KeyIcon style={{
                    width: 30,
                    height: 30,
                  }}/>}
                />
              </div>
              <Button callback={()=>handleLogin()} text="Login"/>
            </div>
          </div>
    )
}

export default Login;