import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import SkillProgressBar from '../../../Components/LeaderBoard/SkillProgressBar';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});

it("renders collapse page data", async () => {
    const fakeProgress = {
        "strength": "12",
        "endurance": "8",
        "dexterity": "9",
        "desitionMaking": "4"
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUsers)
      })
    );
    const { strength, endurance, dexterity, desitionMaking } = fakeProgress;
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<SkillProgressBar 
        strength={strength}  
        endurance={endurance} 
        dexterity={dexterity} 
        desitionMaking={desitionMaking}
         />, container);
    });
  
    expect(container.textContent).toContain(fakeProgress.strength);
    expect(container.textContent).toContain(fakeProgress.endurance);
  
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });
  