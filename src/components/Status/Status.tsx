import React from 'react'
import './Status.scss'

const Status = () => {
  const statuses = [
    {
      name: 'Новые',
      count: 12456,
      state: 'active',
    },
    {
      name: 'В работе',
      count: 12,
      state: '',
    },
    {
      name: 'Внедрено',
      count: 46,
      state: '',
    },
    {
      name: 'Мои',
      count: 0,
      state: '',
    },
    {
      name: 'Все',
      count: 135465,
      state: '',
    },
  ]
  const orders = [
    {
      name: 'По дате',
      state: 'active',
    },
    {
      name: 'По рейтингу',
      state: '',
    },
    {
      name: 'По комментариям',
      state: '',
    },
  ]
  return (
    <nav className='flex'>
      <div className='flex flex-1'>
        {statuses.map((status) => (
          <button
            key={status.name}
            className={`
                    ${
                      !status.state ? 'text-idea-light-indigo' : ''
                    } bg-none flex focus:border-blue-300 focus:outline-none focus:ring-1 font-semibold mr-4 px-2 rounded-2xl text-lg tracking-wider`}
          >
            {status.name}
            <div className='relative'>
              {!!status.count && (
                <div className='-ml-4 -mt-2 absolute bg-idea-light-indigo font-montserat left-0 px-2 rounded-2xl text-idea-dark-blue text-xs top-0'>
                  {status.count}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
      <div className='gap-3 grid grid-flow-col'>
        {orders.map((order) => (
          <button
            key={order.name}
            className={`${
              !order.state && 'text-idea-light-indigo'
            } bg-none false focus:border-blue-300 focus:outline-none focus:ring-1 rounded-2xl text-sm tracking-wider whitespace-nowrap`}
          >
            {order.name}
          </button>
        ))}
      </div>
    </nav>
  )
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default Status
