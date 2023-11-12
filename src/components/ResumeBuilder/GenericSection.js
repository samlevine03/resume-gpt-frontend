import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import GenericEntry from './GenericEntry';
import useEntry from './useEntry';

function GenericSection({ sectionConfig }) {
  const [entries, addEntry, updateEntry, removeEntry, updateField, toggleField] = useEntry(sectionConfig.initialEntries);

    return (
        <Card className="mb-3">
        <Card.Header>{sectionConfig.title}</Card.Header>
        <Card.Body>
            {entries.map((entry, index) => (
                <GenericEntry
                    key={index}
                    entry={entry}
                    config={sectionConfig.entryConfig}
                    onUpdateField={(fieldName, value) => updateField(index, fieldName, value)}
                    onToggleField={(fieldName) => toggleField(index, fieldName)}
                    onRemove={() => removeEntry(index)}
                    isFirst={index === 0}
                />
            ))}
            <Button onClick={() => addEntry(sectionConfig.defaultEntry)}>
                Add Another {sectionConfig.title}
            </Button>
        </Card.Body>
        </Card>
    );
}

export default GenericSection;
