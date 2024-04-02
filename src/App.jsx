import { CORE_CONCEPTS } from './data.js';
import { Header } from './Components/Header/Header.jsx';
import { CoreConcepts } from './Components/CoreConcepts/CoreConcepts.jsx';
import { TabButton } from './Components/TabButton/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');
  let tabContent = <p>Please select one of the above options</p>;
  if (selectedTopic) {
    tabContent = (
      <section id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </section>
    );
  }
  function onSelect(params) {
    setSelectedTopic(params);
  }
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <h3>Core Concepts</h3>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcepts {...conceptItem} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === 'components'}
            onClick={() => onSelect('components')}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'jsx'}
            onClick={() => onSelect('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'props'}
            onClick={() => onSelect('props')}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'state'}
            onClick={() => onSelect('state')}
          >
            State
          </TabButton>
        </menu>
      </section>
      {tabContent}
    </div>
  );
}

export default App;
