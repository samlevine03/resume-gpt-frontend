import { useState } from 'react';
import _ from 'lodash';

const useEntry = (initialEntries) => {
    const [entries, setEntries] = useState(initialEntries);

    const addEntry = (newEntry) => {
        // Use lodash's cloneDeep to ensure a new reference is created for the new entry
        const uniqueEntry = _.cloneDeep(newEntry);
        setEntries([...entries, uniqueEntry]);
    };
    

    const removeEntry = (index) => {
        setEntries(entries.filter((_, i) => i !== index));
    };

    const updateField = (index, fieldName, value, arrayIndex = null) => {
        const newEntries = [...entries];
        if (arrayIndex !== null) {
            newEntries[index][fieldName][arrayIndex] = value; // Update specific array item
        } else {
            newEntries[index][fieldName] = value; // For non-array fields
        }
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
        updateField(index, fieldName, !entries[index][fieldName]);
    };

    const addArrayField = (index, fieldName) => {
        const newEntries = [...entries];
        newEntries[index][fieldName].push(''); // Add an empty string to the array
        setEntries(newEntries);
    };
    
    const removeArrayField = (index, fieldName, arrayIndex) => {
        const newEntries = [...entries];
        newEntries[index][fieldName].splice(arrayIndex, 1); // Remove item at arrayIndex
        setEntries(newEntries);
    };    
    

    return [entries, addEntry, removeEntry, updateField, toggleField, addArrayField, removeArrayField];
};

export default useEntry;
