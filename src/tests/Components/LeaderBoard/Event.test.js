import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils';
import Event from '../../../Components/LeaderBoard/Event';

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
    const fakeEvents = [
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
      ];
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeUsers)
      })
    );
    const state = {
        event: fakeEvents[0]
    };
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<Event value={state.event} number={0} />, container);
    });
  
    expect(container.querySelector("h1").textContent).toBe(state.event.name);
    expect(container.querySelectorAll(".row").length).toBe(state.event.options.length);
  
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });
  