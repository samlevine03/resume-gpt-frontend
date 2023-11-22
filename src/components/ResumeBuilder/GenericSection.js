import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import GenericEntry from './GenericEntry';
import useEntry from './useEntry';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

function GenericSection({ sectionConfig, sectionData, onUpdate }) {
    const [
        entries, 
        addEntry,  
        removeEntry, 
        updateField, 
        toggleField, 
        addArrayField, 
        removeArrayField
    ] = useEntry(sectionData);

    const [isSectionHidden, setIsSectionHidden] = useState(false);

    const toggleSectionVisibility = () => {
        setIsSectionHidden(!isSectionHidden);
    };

    const handleUpdateField = (index, fieldName, value, arrayIndex = null) => {
        updateField(index, fieldName, value, arrayIndex);
        const updatedEntries = entries.map((entry, idx) => {
            if (idx === index) {
                if (arrayIndex !== null) {
                    const newArray = [...entry[fieldName]];
                    newArray[arrayIndex] = value;
                    return { ...entry, [fieldName]: newArray };
                } else {
                    return { ...entry, [fieldName]: value };
                }
            }
            return entry;
        });
        onUpdate(updatedEntries);
    };

    return (
        <Card className="mb-3">
            <Card.Header>
                {sectionConfig.title}
                {sectionConfig.showHideButton && (
                    <Button variant="secondary" onClick={toggleSectionVisibility} className="float-end btn-sm">
                        {isSectionHidden ? <Eye /> : <EyeSlash /> }
                    </Button>
                )}
            </Card.Header>
            <Card.Body hidden={isSectionHidden}>
                {entries.map((entry, index) => (
                    <GenericEntry
                        key={index}
                        entry={entry}
                        config={sectionConfig.entryConfig}
                        onUpdateField={(fieldName, value, arrayIndex) => handleUpdateField(index, fieldName, value, arrayIndex)}
                        onToggleField={(fieldName) => toggleField(index, fieldName)}
                        onRemove={() => removeEntry(index)}
                        onAddArrayField={(fieldName) => addArrayField(index, fieldName)}
                        onRemoveArrayField={(fieldName, arrayIndex) => removeArrayField(index, fieldName, arrayIndex)}
                        isFirst={index === 0}
                    />
                ))}
                {sectionConfig.showAddButton && (
                    <Button onClick={() => addEntry(sectionConfig.defaultEntry)}>
                        Add Another {sectionConfig.title}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default GenericSection;
