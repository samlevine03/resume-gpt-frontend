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

    const updateField = (index, fieldName, value, action = 'update', arrayIndex = null) => {
        const newEntries = entries.map((entry, idx) => {
            if (idx === index) {
                let updatedEntry = { ...entry };

                // Check if it's an array update
                if (action === 'updateArray') {
                    let array = [...updatedEntry[fieldName]];

                    if (action === 'add') {
                        array.push('');
                    } else if (action === 'remove' && arrayIndex !== null) {
                        array.splice(arrayIndex, 1);
                    } else {
                        array[arrayIndex] = value;
                    }

                    updatedEntry[fieldName] = array;
                } else {
                    // Standard field update
                    updatedEntry[fieldName] = value;
                }

                return updatedEntry;
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
