const EducationComponent = ({ educations, setEducations }) => {
    const addEducation = () => {
        const newEducation = {
            id: Date.now(),
            school: '',
            degree: '',
            fieldOfStudy: '',
            startYear: '',
            endYear: ''
        };
        setEducations([...educations, newEducation]);
    };

    const removeEducation = (id) => {
        setEducations(educations.filter(education => education.id !== id));
    };

    const handleInputChange = (id, field, value) => {
        setEducations(educations.map(education =>
            education.id === id ? {...education, [field]: value} : education
        ));
    };

    return (
        <div>
            {educations && educations.map((education, index) => (
                <div key={education.id}>
                    <input
                        type="text"
                        value={education.school}
                        onChange={e => handleInputChange(education.id, 'school', e.target.value)}
                        placeholder="Schule/Universität"
                    />
                    <input
                        type="text"
                        value={education.degree}
                        onChange={e => handleInputChange(education.id, 'degree', e.target.value)}
                        placeholder="Abschluss"
                    />
                    <input
                        type="text"
                        value={education.fieldOfStudy}
                        onChange={e => handleInputChange(education.id, 'fieldOfStudy', e.target.value)}
                        placeholder="Studienfach"
                    />
                    <input
                        type="text"
                        value={education.startYear}
                        onChange={e => handleInputChange(education.id, 'startYear', e.target.value)}
                        placeholder="Startjahr"
                    />
                    <input
                        type="text"
                        value={education.endYear}
                        onChange={e => handleInputChange(education.id, 'endYear', e.target.value)}
                        placeholder="Endjahr"
                    />
                    <button onClick={() => removeEducation(education.id)}>Entfernen</button>
                </div>
            ))}
            <button onClick={addEducation}>Bildung hinzufügen</button>
        </div>
    );
};

export default EducationComponent;
