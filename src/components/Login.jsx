// // Login.jsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const Login = ({ navigation }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         // Agrega aquí la lógica de autenticación, similar a lo que tenías en Main.jsx
//         // ...

//         if (user && user.password === password) {
//             navigation.navigate('Main', { studentName: user.email });
//         } else {
//             console.log('Credenciales inválidas');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             {/* Espacio del encabezado (puedes ajustar el estilo según tus necesidades) */}
//             <View style={styles.header}>
//                 <Image
//                     source={require('../components/img/sai.png')}
//                     style={styles.logo}
//                     resizeMode="contain"
//                 />
//                 <Text style={styles.institutionText}>Institución Universitaria de Envigado</Text>
//                 <Text style={styles.welcomeText}>Bienvenido a Asesoría Ágil</Text>
//             </View>

//             {/* Input de ingresar usuario */}
//             <TextInput
//                 style={styles.input}
//                 placeholder="Correo electrónico"
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//             />

//             {/* Input de ingresar contraseña */}
//             <TextInput
//                 style={styles.input}
//                 placeholder="Contraseña"
//                 secureTextEntry={true}
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//             />

//             {/* Botón de ingresar */}
//             <Button title="Ingresar" onPress={handleLogin} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 16,
//     },
//     input: {
//         width: '100%',
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 12,
//         paddingHorizontal: 10,
//     },
// });

// export default Login;

// //-------------------------------------------#############################-----------------------------------
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import usuario  from './Usuario';

const Login = ({ navigation }) => {
    const [cedula, setCedula] = useState('');
    const [contraseña, setContraseña] = useState('');

    // const handleLogin = () => {
    //     // Aquí simulas la lógica de autenticación
    //     if (cedula === '121432' && contraseña === '12344567') {
    //         // Si el usuario y la contraseña coinciden, navegas a la página "Main"
    //         navigation.navigate('Home', { cedula: cedula });
    //         console.log("se inicio sección correctamente");
    //     } else {
    //         console.log('Credenciales inválidas');
    //     }
    // };
    const handleLogin = () => {
        const usuarioEncontrado = usuario.find(user => user.cedula === cedula && user.contraseña === contraseña);
    
        if (usuarioEncontrado) {
            const { rol, cedula } = usuarioEncontrado;
    
            if (rol === 'estudiante') {
                navigation.navigate('Estudiante', { cedula });
            } else if (rol === 'profesor') {
                navigation.navigate('Profesor', { cedula });
            } else if (rol === 'administrador') {
                navigation.navigate('Administrador', { cedula });
            }
            console.log("Se inició sesión correctamente");
        } else {
            console.log('Credenciales inválidas');
        }
    };

    return (
        <View style={styles.container}>
            {/* Espacio del encabezado (puedes ajustar el estilo según tus necesidades) */}
            <View style={styles.header}>
                <Image
                    source={require('../components/img/sai.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.institutionText}>Institución Universitaria de Envigado</Text>
                <Text style={styles.welcomeText}>Bienvenido a Asesoría Ágil</Text>
            </View>

            {/* Input de ingresar usuario */}
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={cedula}
                onChangeText={(text) => setCedula(text)}
            />

            {/* Input de ingresar contraseña */}
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={true}
                value={contraseña}
                onChangeText={(text) => setContraseña(text)}
            />

            {/* Botón de ingresar */}
            <Button title="Ingresar" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    institutionText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
});

export default Login;
