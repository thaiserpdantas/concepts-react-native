import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
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

            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.projects}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>

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
        fontSize: 30,
    }
});