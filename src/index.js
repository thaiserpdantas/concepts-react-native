import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import api from './services/api'

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
        });
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

            <ScrollView style={styles.container}>
                {projects.map(project => (
                    <Text style={styles.projects} key={project.id}>{project.title}</Text>
                ))}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
    },

    projects: {
        color: '#FFF',
        fontSize: 120,
    }
});