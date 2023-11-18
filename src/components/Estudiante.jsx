import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usuario  from './Usuario';


const Estudiante = ({ route }) => {
    const { nombre, foto, cedula } = route.params;
    const navigation = useNavigation();
    const estudiante = usuario.find(user => user.cedula === cedula);

    const navigateToRegistrarAsignaturaEstudiante = () => {
       
        navigation.navigate('RegistrarAsignaturaEstudiante', { cedula });
      };

    return (
        <View style={styles.container}>
            {/* Barra de navegación */}
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.navText}>Atrás</Text>
                </TouchableOpacity>
            </View>

            {/* Encabezado */}
            <View style={styles.header}>
            <Image source={estudiante.foto} style={styles.profileImage} />
                <View style={styles.profileInfo}>
                <Text>{estudiante.rol}</Text>
                    <Text>{`${estudiante.nombre} ${estudiante.apellido}`}</Text>
                </View>
            </View>

            {/* Cuerpo de la página */}
            <ScrollView style={styles.body}>
                <Text style={styles.greetingText}>Buenas tardes, {nombre}</Text>
                <Text style={styles.welcomeText}>Bienvenido a Asesoria Agil</Text>
                <Text style={styles.paragraph}>
                    Descubre nuestro Servicio de Tutorías en la Universidad de Envigado.
                    Con horarios flexibles y personalizados, conectamos estudiantes y profesores
                    para un aprendizaje enriquecedor. Reserva sesiones de asesoría, interactúa
                    con tus profesores y accede a recursos de apoyo. Una experiencia colaborativa
                    que potencia tu crecimiento académico.
                </Text>

                {/* Botones */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={navigateToRegistrarAsignaturaEstudiante}>
                        <Text style={styles.buttonText}>Asesorías disponibles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Reportar novedad</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Historial de asesorías</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Pie de página */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.footerText}>Regresar al Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    navBar: {
        backgroundColor: '#D88A0D',
        padding: 10,
    },
    navText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    roleText: {
        color: '#D88A0D',
        fontSize: 16,
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 18,
    },
    body: {
        padding: 16,
    },
    greetingText: {
        fontSize: 16,
        marginBottom: 8,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    button: {
        flex: 1,
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 8,
        marginRight: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
        alignItems: 'center',
    },
    footerText: {
        color: '#007BFF',
    },
});

export default Estudiante;

