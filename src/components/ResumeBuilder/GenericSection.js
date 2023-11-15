import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import GenericEntry from './GenericEntry';
import useEntry from './useEntry';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

function GenericSection({ sectionConfig }) {
    const [
        entries, 
        addEntry, 
        updateEntry, 
        removeEntry, 
        updateField, 
        toggleField, 
        addArrayField, 
        removeArrayField
    ] = useEntry(sectionConfig.initialEntries);

    const [isSectionHidden, setIsSectionHidden] = useState(false);

    const toggleSectionVisibility = () => {
        setIsSectionHidden(!isSectionHidden);
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
                        onUpdateField={(fieldName, value, arrayIndex) => updateField(index, fieldName, value, arrayIndex)}
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
