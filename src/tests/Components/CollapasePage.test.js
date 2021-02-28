import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import AppContext from '../../context/AppContext';
import CollapsePage from '../../Components/CollapsePage';

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

it('Can render empty collapse page', () => {
  // Test first render and componentDidMount
  act(() => {
    render(<CollapsePage />, container);
  });
  expect(container.textContext).toBe(undefined);
});

it("renders collapse page data", async () => {
    const fakeUsers = [{
        "skills": [
          {
            "name": "Post Apocalyptic Highway",
            "options": [
              {
                "name": "Hill Clime",
                "points": "P,R,W,F",
                "score": 5,
                "time": "00:1735"
              },
              {
                "name": "Run For The Hills",
                "points": "P,R",
                "score": 6,
                "time": "00:1735"
              },
              {
                "name": "Coded Doors",
                "points": "P,W",
                "score": 3,
                "time": "00:1735"
              },
              {
                "name": "Spear Throw",
                "points": "R,F",
                "score": 8,
                "time": "00:1735"
              },
              {
                "name": "Sand Bagging",
                "points": "P,W,F",
                "score": 2,
                "time": "00:1735"
              }
            ]
          },
          {
            "name": "Costa Rica Caves",
            "options": [
              {
                "name": "Crevasse Crossing",
                "points": "P,R,W,F",
                "score": 5,
                "time": "00:1735"
              },
              {
                "name": "The Canopy",
                "points": "P,R",
                "score": 6,
                "time": "00:1735"
              },
              {
                "name": "Dirty Armor",
                "points": "P,W",
                "score": 3,
                "time": "00:1735"
              },
              {
                "name": "Navigational Challenge",
                "points": "R,F",
                "score": 8,
                "time": "00:1735"
              },
              {
                "name": "Dead Weeight",
                "points": "P,W,F",
                "score": 2,
                "time": "00:1735"
              }
            ]
          }
        ],
        "name": "Fermin Perdomo",
        "photo": "https://randomuser.me/api/portraits/men/45.jpg",
        "bib": "1085",
        "age": "27",
        "gender": "M",
        "time": "17:42",
        "score": "41",
        "strength": "12",
        "endurance": "8",
        "dexterity": "9",
        "desitionMaking": "4"}];
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUsers)
      })
    );
    const state = {
        users: fakeUsers
    };
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(
          <AppContext.Provider value={state}>
              <CollapsePage id="123" />
          </AppContext.Provider>
      
      , container);
    });
  
    expect(container.querySelector(".participan-name").textContent).toBe(fakeUsers[0].name);
    expect(container.querySelector(".age").textContent).toBe(fakeUsers[0].age);
    expect(container.textContent).toContain(fakeUsers[0].bib);
    expect(container.textContent).toContain(fakeUsers[0].gender);
  
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });