import './App.css';

const Values = [
  {
    type: "FREE",
    title: "$0/month",
    features: [
      { title: 'single user', isEnable: true },
      { title: '50GB storage', isEnable: true },
      { title: 'Unlimited public project', isEnable: true },
      { title: 'Community Access', isEnable: true },
      { title: 'Unlimited private project', isEnable: false },
      { title: 'Dedicated phone support', isEnable: false },
      { title: 'free subscription', isEnable: false },
      { title: 'Monthly status support', isEnable: false }
    ],
  },
  {
    type: "PLUS",
    title: "$9/month",
    features: [
      { title: 'single user', isEnable: true },
      { title: '50GB storage', isEnable: true },
      { title: 'Unlimited public project', isEnable: true },
      { title: 'Community Access', isEnable: true },
      { title: 'Unlimited private project', isEnable: true },
      { title: 'Dedicated phone support', isEnable: true },
      { title: 'free subscription', isEnable: true },
      { title: 'Monthly status support', isEnable: false }
    ],
  },
  {
    type: "PRO",
    title: "$49/month",
    features: [
      { title: 'single user', isEnable: true },
      { title: '50GB storage', isEnable: true },
      { title: 'Unlimited public project', isEnable: true },
      { title: 'Community Access', isEnable: true },
      { title: 'Unlimited private project', isEnable: true },
      { title: 'Dedicated phone support', isEnable: true },
      { title: 'free subscription', isEnable: true },
      { title: 'Monthly status support', isEnable: true }
    ],
  }
];

const Subscriptions = () => {
  return (
    <div className="full-page">
      {Values.map((val, index) => (
        <div key={index} className="subscription-section">
          <div className="subscription-container">
            <div className="subscription-card">
              <p className='type'>{val.type}</p>
              <h3>{val.title}</h3>
              <hr />
{val.features.map((feature, index) => (
<p key={index} style={{ textDecoration: feature.isEnable ? 'none' : 'line-through',color: feature.isEnable ? 'black' : '#807b7b' }}>{feature.isEnable && <i className="fa-solid fa-check"></i>}{!feature.isEnable && <i className="fa-solid fa-xmark"></i>} {'  '}{feature.title}</p>
))}
              <button className='btn'>button</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Subscriptions;
