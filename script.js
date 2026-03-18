const summaryEl = document.querySelector('.map-center-copy h3');
const ribbonHealth = document.querySelector('.ribbon-metrics strong');
const actionButton = document.querySelector('.primary');
const recoveryCard = document.querySelector('.timeline-track article:last-child p');

const states = [
  {
    summary: 'Global platform health is stable, but Germany-West is experiencing a customer-facing payments incident.',
    health: '94',
    recovery: 'Error rate dropped 67%, risk score fell from 91 to 28.',
    action: 'Approve rollback + reroute'
  },
  {
    summary: 'Predictive models are flagging Singapore voice routing as the next likely degradation if queue depth keeps rising.',
    health: '91',
    recovery: 'Preventive scaling recommendation prepared for APAC voice routing.',
    action: 'Approve preventive scaling'
  },
  {
    summary: 'Recovery is holding in Germany-West, and executive briefing mode is ready for stakeholder export.',
    health: '96',
    recovery: 'Customer-safe summary drafted and rollback validation completed.',
    action: 'Generate final briefing'
  }
];

let currentState = 0;

setInterval(() => {
  currentState = (currentState + 1) % states.length;
  const state = states[currentState];
  summaryEl.textContent = state.summary;
  ribbonHealth.textContent = state.health;
  recoveryCard.textContent = state.recovery;
  actionButton.textContent = state.action;
}, 5000);
