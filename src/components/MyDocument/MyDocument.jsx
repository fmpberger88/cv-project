import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 30,
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    title: {
        backgroundColor: '#000',
        color: '#fff',
        padding: 8,
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10,
        objectFit: 'cover',
    },
    infoContainer: {
        flexDirection: 'column',
        flexGrow: 1,
    }
});

// Add educations to the component props
const MyDocument = ({ address, image, educations }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>Personal Information</Text>
                <Image style={styles.image} src={image} />
                <View style={styles.section}>
                    <Text>First Name: {address.firstName}</Text>
                    <Text>Last Name: {address.lastName}</Text>
                    <Text>Street: {address.street}</Text>
                    <Text>City: {address.city}</Text>
                    <Text>Zip Code: {address.zipcode}</Text>
                    <Text>Country: {address.country}</Text>
                    <Text>Birth Date: {address.birthdate}</Text>
                </View>
                {/* Render each education entry */}
                <Text style={styles.title}>Education</Text>
                {educations.map((edu, index) => (
                    <View key={index} style={styles.section}>
                        <Text>School: {edu.school}</Text>
                        <Text>Degree: {edu.degree}</Text>
                        <Text>Field of Study: {edu.fieldOfStudy}</Text>
                        <Text>From: {edu.startYear}</Text>
                        <Text>To: {edu.endYear}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

export default MyDocument;
