import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe('Dropdown', () => {
    afterEach(rtl.cleanup)
    let wrapper;
    beforeEach(()=>{
      wrapper = rtl.render(
        <App />
      )
    })
  
    it('displays 1983', async () => {
     

      const strangerThings = await wrapper.findAllByText(/stranger things/i);
       console.log(strangerThings)
      expect(strangerThings).toHaveLength(2)
      // const [item1, item2] = strangerThings;
      const item1 = strangerThings[0]
      const item2 = strangerThings[1]
// item1 = await wrapper.findByText(/stranger things/i);
      // const str = rtl.render(<h1>Stranger Things</h1>)

      // // const stra = str.getByText(/stranger things/ i)
      // expect(item1).toBe(str)
      
    })
    it('', async ()=>{
      const year = await wrapper.findAllByText(/1983/)
      expect(year).not.toHaveLength(0)
    })
    it('', async ()=>{
      const trial  = await wrapper.findByText(/select a season/i)
     
      expect(trial).toBeInTheDocument()
      // rtl.fireEvent.change(trial)
      // const tri = await wrapper.findByText(/season 1/i)
      // expect(tri).not.toHaveLength(0)
    })
  })

    