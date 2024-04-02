import { CORE_CONCEPTS } from './data.js';
import { Header } from './Components/Header/Header.jsx';
import { CoreConcepts } from './Components/CoreConcepts/CoreConcepts.jsx';
import { TabButton } from './Components/TabButton/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');
  function onSelect(params) {
    setSelectedTopic(params);
  }
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <h3>Core Concepts</h3>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onClick={() => onSelect('components')}>
            Components
          </TabButton>
          <TabButton onClick={() => onSelect('jsx')}>JSX</TabButton>
          <TabButton onClick={() => onSelect('props')}>Props</TabButton>
          <TabButton onClick={() => onSelect('state')}>State</TabButton>
        </menu>
      </section>
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
