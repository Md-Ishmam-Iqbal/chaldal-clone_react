import React from 'react'

const Head = () => {
  return (
    <div className='head'>
        <div className='floatingSearchBar'>
          <div className='searchBarContainer'>
            <h2 className='searchBarText'>
              Groceries delivered in 30 minutes
            </h2>
            <form className='searchArea'>
              <table className='headTable'>
                <tbody>
                  <tr className='trHead'>
                    <td>
                      <input type="text" className='searchBoxHead' autoComplete='off' placeholder='Search for Products (e.g. eggs, milk, potato' />
                    </td>
                    <td className='buttonCell'>
                      <button type='submit' className='button2'>
                        <svg className='svgSearch' x="0px" y="0px" viewBox='0 0 100 100'>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
            {/* <input type="text" aria-label='Search for Products (e.g. eggs, milk, potato'/> */}
          </div>
        </div>
      </div>
  )
}

export default Head