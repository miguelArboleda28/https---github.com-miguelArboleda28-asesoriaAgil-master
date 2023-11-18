// import React from 'react';

// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
// import Main from './src/components/Main.jsx'
// import Home from './src/components/Home.jsx'
// const Stack = createStackNavigator();

// export default function App() {
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Main">
//         <Stack.Screen
//           name="Main"
//           component={Main}
//           options={{ title: 'Inicio' }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: 'Página de Inicio' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


//---------------------------------------------------------------------

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/components/Main.jsx';
import Home from './src/components/Home.jsx';
import Estudiante from './src/components/Estudiante.jsx'; // Importa la pantalla Estudiante
import Profesor from './src/components/Profesor.jsx'; // Importa la pantalla Profesor
import Administrador from './src/components/Administrador.jsx'; // Importa la pantalla Admin
import AsignaturaProfesor from './src/components/AsignaturaProfesor.jsx'
import RegistrarAsignaturaProfesor from './src/components/RegistrarAsignaturaProfesor.jsx';
import RegistrarAsignaturaEstudiante from './src/components/RegistrarAsignaturaEstudiante.jsx';
import AsignaturaEstudiante from './src/components/AsignaturaEstudiante.jsx';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Página de Inicio' }}
        />
        <Stack.Screen
          name="Estudiante"
          component={Estudiante}
          options={{ title: 'Página de Estudiante' }}
        />
        <Stack.Screen
          name="Profesor"
          component={Profesor}
          options={{ title: 'Página de Profesor' }}
        />
        <Stack.Screen
          name="Administrador"
          component={Administrador}
          options={{ title: 'Página de Administrador' }}
        />
         <Stack.Screen
          name="AsignaturaProfesor"
          component={AsignaturaProfesor}
          options={{ title: 'Asignaturas Profesor' }}
        />
          <Stack.Screen
          name="RegistrarAsignaturaProfesor"
          component={RegistrarAsignaturaProfesor}
          options={{ title: 'Registrar Asignatura Profesor' }}
        />
         <Stack.Screen
          name="RegistrarAsignaturaEstudiante"
          component={RegistrarAsignaturaEstudiante}
          options={{ title: 'Registrar Asignatura Estudiante' }}
        />
        <Stack.Screen
          name="AsignaturaEstudiante"
          component={AsignaturaEstudiante}
          options={{ title: 'Asignatura Estudiante' }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


