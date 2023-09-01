import { useState } from 'react';
import RuleTable from './RuleTable';

export default function AnalyzationPage() {
    const rules = [
        { rule: 'Error', level: 'low', date: '15-8-2023', Message: 'jjj' },
        { rule: 'Exception', level: 'Medium', date: '16-8-2023', Message: 'kkk' },
        { rule: 'Exception', level: 'High', date: '15-9-2023', Message: 'lll' },
        { rule: 'Error', level: 'low', date: '10-10-2023', Message: 'mmm' }
    ];

    const [sortedBy, setSortedBy] = useState(null);

    const handleSortChange = (event) => {
        setSortedBy(event.target.value);
    };

    const sortedRules = rules.slice().sort((a, b) => {
        if (sortedBy === 'level') {
            const levelOrder = { low: 1, medium: 2, high: 3 };
            return levelOrder[a.level.toLowerCase()] - levelOrder[b.level.toLowerCase()];
        } else if (sortedBy === 'date') {
            return new Date(a.date) - new Date(b.date);
        }
        return 0;
    });

    return (
        <div>
            <h1>Your Table</h1>
            <label htmlFor="sortOptions">Sort By: </label>
            <select id="sortOptions" onChange={handleSortChange}>
                <option value="">None</option>
                <option value="level">Level</option>
                <option value="date">Date</option>
            </select>
            <div className="App">
                <RuleTable rules={sortedRules} />
            </div>
        </div>
    );
}