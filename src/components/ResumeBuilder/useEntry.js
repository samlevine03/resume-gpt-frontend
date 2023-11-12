import { useState } from 'react';

const useEntry = (initialEntries) => {
    const [entries, setEntries] = useState(initialEntries);

    const addEntry = (newEntry) => {
        setEntries([...entries, newEntry]);
    };

    const updateEntry = (index, updatedEntry) => {
        const updatedEntries = [...entries];
        updatedEntries[index] = updatedEntry;
        setEntries(updatedEntries);
    };

    const removeEntry = (index) => {
        setEntries(entries.filter((_, i) => i !== index));
    };

    const updateField = (index, fieldName, value) => {
        const newEntries = entries.map((entry, idx) => {
            if (idx === index) {
                return { ...entry, [fieldName]: value };
            }
            return entry;
        });
        setEntries(newEntries);
    };    

    const toggleField = (index, fieldName) => {
        const newEntries = entries.map((entry, idx) => {
            if (idx === index) {
                return { ...entry, [fieldName]: !entry[fieldName] };
            }
            return entry;
        });
        setEntries(newEntries);
    };
    

    return [entries, addEntry, updateEntry, removeEntry, updateField, toggleField];
};

export default useEntry;
