const appData = {
  tenants: [
    {
      id: 'helios',
      name: 'Helios Financial Group',
      mode: 'Semi-Auto',
      guardrails: 'Human approval required for production changes',
      scenes: [
        {
          id: 'calm',
          label: 'Scene 1 · Calm before the storm',
          title: 'Global Operational Posture',
          status: 'No current customer-facing P1 impact',
          health: '94',
          trend: '+2 vs 1h',
          incidents: '02',
          incidentDetail: '0 critical · 2 predicted risks',
          mapSummary: 'Global platform health is 94 with elevated but non-critical risk in Germany-West and Singapore.',
          mapDetail: 'Executive posture: watch API gateway saturation in EMEA and queue depth growth in APAC.',
          incidentTitle: 'Global risk briefing',
          incidentSummary: 'No active P1 incidents, but NovaOps is forecasting a growing probability of customer-facing degradation in Germany-West payments and Singapore voice routing.',
          bullets: ['EMEA payments risk score: 63', 'APAC voice routing risk score: 71', 'Recommended action: monitor + pre-stage failover'],
          evidence: [
            ['Leading indicator', 'Queue depth in APAC voice routing has risen for 18 straight minutes.'],
            ['Topology signal', 'Germany-West gateway latency is propagating into payment authorization dependencies.'],
            ['Business view', 'No current SLA breach, but enterprise payment traffic is inside the early warning band.']
          ],
          actions: [
            'Pre-stage Germany-West rollback bundle',
            'Increase APAC voice routing capacity by 10%',
            'Notify service manager of elevated risk posture'
          ],
          primaryAction: 'Approve preventive actions',
          confidence: '78% confidence',
          customerMessage: 'We are seeing elevated risk indicators in selected regions, but customer-facing services remain available and we have pre-staged mitigation actions.',
          briefingNote: 'Slide-ready takeaway: NovaOps shifted the conversation from reactive incident response to predictive operational posture.',
          headlines: [
            ['Current posture', 'Global posture is stable with two elevated-risk regions and no active P1 business impact.'],
            ['Top risk', 'Germany-West payments shows the highest near-term SLA exposure.'],
            ['Suggested move', 'Pre-authorize low-risk mitigations before customer impact emerges.']
          ],
          regions: [
            { cls: 'na severity-healthy', name: 'North America', title: 'Healthy · 96', detail: 'No active incidents · 0 customers impacted' },
            { cls: 'emea severity-degraded', name: 'Germany-West', title: 'Elevated risk · 63', detail: 'Gateway latency rising · SLA watchlist' },
            { cls: 'apac severity-risk', name: 'Singapore', title: 'Predicted risk · 71', detail: 'Voice queue growth · preventive action recommended' }
          ],
          services: [
            ['Customer Identity', 'severity-healthy', 'Health 98 · Risk 14', 'Identity stable across all regions.'],
            ['API Gateway', 'severity-degraded', 'Health 79 · Risk 63', 'Gateway saturation trending upward in EMEA.'],
            ['Payments Core', 'severity-risk', 'Health 82 · Risk 67', 'Near-miss pattern detected against authorization SLA.'],
            ['Voice Routing', 'severity-risk', 'Health 84 · Risk 71', 'APAC queue divergence suggests likely degradation next.']
          ],
          graph: [
            ['Germany-West Gateway', 'var(--amber)'],
            ['Payments API', 'var(--purple)'],
            ['Card Authorization', 'var(--cyan)'],
            ['Enterprise Customers', 'var(--green)']
          ],
          timeline: [
            ['13:42', 'Leading indicators increase', 'Queue depth growth and gateway latency trend divergence detected.', 'alert'],
            ['13:49', 'Predictive risk score raised', 'NovaOps increases EMEA payments risk from 44 to 63.', 'deploy'],
            ['13:53', 'Preventive bundle prepared', 'Rollback, failover, and communication drafts staged.', 'action'],
            ['13:58', 'Executive alert generated', 'Service manager receives a proactive customer-meeting summary.', 'recovery']
          ],
          beforeAfter: [
            ['Before', 'Teams wait for customer impact', 'Operators rely on multiple tools and delayed escalations to understand region-level risk.'],
            ['After', 'Predict-before-break operations', 'NovaOps highlights likely failure paths, business exposure, and approved preventive actions in one screen.']
          ]
        },
        {
          id: 'incident',
          label: 'Scene 2 · Germany-West outage',
          title: 'Germany-West Payments Incident',
          status: '18 enterprise customers impacted · P1 declared',
          health: '68',
          trend: '-26 vs 1h',
          incidents: '03',
          incidentDetail: '1 critical · 2 secondary risks',
          mapSummary: 'Germany-West has entered a customer-facing P1 payments outage after release 2026.03.18.4 saturated the API gateway.',
          mapDetail: 'Blast radius: 18 enterprise customers · Card authorization SLA at risk · Recovery ETA 12 min.',
          incidentTitle: 'Germany-West Payments Incident',
          incidentSummary: 'Latency increased 340% in the last 7 minutes due to gateway saturation immediately after deployment 2026.03.18.4, degrading payment authorization for enterprise customers.',
          bullets: ['180 raw alerts collapsed into 1 correlated P1 incident', 'Likely root cause confidence: 0.87', 'Recommended response: rollback + shift 30% traffic to Netherlands'],
          evidence: [
            ['Change correlation', 'Deployment 2026.03.18.4 occurred two minutes before error-rate acceleration.'],
            ['Topology evidence', 'Gateway saturation propagated into payment authorization and downstream settlement services.'],
            ['Business impact', '18 enterprise customers face card authorization delays, creating immediate P1 SLA risk.']
          ],
          actions: [
            'Rollback release 2026.03.18.4',
            'Shift 30% of Germany-West traffic to Netherlands',
            'Open incident bridge and push customer-safe update'
          ],
          primaryAction: 'Approve rollback + reroute',
          confidence: '92% confidence',
          customerMessage: 'We identified elevated payment latency in Germany-West, isolated the likely trigger to a recent release, and have already initiated rollback and traffic-protection measures.',
          briefingNote: 'Narrative: Hundreds of alerts became one clear story, one decision, and one action plane.',
          headlines: [
            ['What happened', 'A faulty release saturated the Germany-West API gateway and created a customer-facing payments incident.'],
            ['Why it matters', '18 enterprise customers are affected and the card authorization SLA is threatened.'],
            ['What AI recommends', 'Approve rollback and reroute traffic to reduce blast radius immediately.']
          ],
          regions: [
            { cls: 'na severity-healthy', name: 'North America', title: 'Healthy · 96', detail: 'No customer impact · failover capacity available' },
            { cls: 'emea severity-critical pulse', name: 'Germany-West', title: 'P1 Payments Outage', detail: '18 customers impacted · Latency +340%' },
            { cls: 'apac severity-risk', name: 'Singapore', title: 'Predicted risk · 71', detail: 'Secondary watchlist while EMEA recovers' }
          ],
          services: [
            ['Customer Identity', 'severity-healthy', 'Health 98 · Risk 14', 'Identity remains isolated from the payments failure.'],
            ['API Gateway', 'severity-critical', 'Health 39 · Risk 95', 'Gateway saturation is the primary root-cause signal.'],
            ['Payments Core', 'severity-critical', 'Health 34 · Risk 91', 'Enterprise authorization traffic is currently degraded.'],
            ['Voice Routing', 'severity-risk', 'Health 84 · Risk 68', 'APAC remains watch-listed but not customer facing.']
          ],
          graph: [
            ['Release 2026.03.18.4', 'var(--amber)'],
            ['Germany-West API Gateway', 'var(--red)'],
            ['Payments Core', 'var(--purple)'],
            ['Card Authorization SLA', 'var(--cyan)'],
            ['Enterprise Customers', 'var(--green)']
          ],
          timeline: [
            ['14:02', 'Alert burst detected', '180 alerts entered the stream across gateway, auth, and card services.', 'alert'],
            ['14:04', 'Release deployed', 'Configuration change correlated with error-rate slope acceleration.', 'deploy'],
            ['14:06', 'P1 incident declared', 'LLMHub summary, RCA hypotheses, and blast radius generated.', 'alert'],
            ['14:08', 'Safe actions approved', 'Rollback initiated and 30% of traffic shifted to Netherlands.', 'action'],
            ['14:11', 'Recovery trending positive', 'Error rate drops and risk score starts to decline.', 'recovery']
          ],
          beforeAfter: [
            ['Before', 'Noise and uncertainty', 'Multiple tools, duplicated alerts, unclear ownership, and no customer-safe narrative.'],
            ['After', 'One story. One action plane.', 'NovaOps correlates, explains, recommends, executes guarded automation, and drafts executive updates.']
          ]
        },
        {
          id: 'recovery',
          label: 'Scene 3 · Recovery and briefing',
          title: 'Recovery Forecast + Executive Brief',
          status: 'Rollback active · Traffic protected · SLA risk falling',
          health: '91',
          trend: '+23 vs incident low',
          incidents: '02',
          incidentDetail: '0 critical · 1 watchlist risk',
          mapSummary: 'Germany-West is recovering after rollback and traffic reroute, while NovaOps prepares the executive and customer briefings.',
          mapDetail: 'Risk score dropped from 91 to 28 · Customer-safe update generated · Stability confidence rising.',
          incidentTitle: 'Recovery narrative',
          incidentSummary: 'The rollback completed successfully, traffic has been rebalanced to the Netherlands, and customer-impacting error rates are declining across the payment journey.',
          bullets: ['Risk score reduced from 91 to 28', 'Customer-safe update drafted automatically', 'Executive briefing export ready in seconds'],
          evidence: [
            ['Recovery signal', 'Gateway saturation dropped sharply after rollback confirmation.'],
            ['Traffic control', '30% of Germany-West traffic is now served by Netherlands capacity.'],
            ['Confidence view', 'Current stabilization confidence is high enough to shift from incident command to briefing mode.']
          ],
          actions: [
            'Validate rollback success against payment SLOs',
            'Send executive summary and customer-safe note',
            'Keep APAC voice routing in predictive watch mode'
          ],
          primaryAction: 'Generate final briefing',
          confidence: '95% confidence',
          customerMessage: 'Service has stabilized following rollback and traffic redistribution; we continue to monitor the payment path closely and will share a final closure update once stability is fully confirmed.',
          briefingNote: 'Executive framing: what happened, why it happened, what AI did, and why customers are safe now.',
          headlines: [
            ['Current posture', 'Germany-West is recovering with sharply reduced SLA exposure and strong stabilization signals.'],
            ['Action taken', 'AI-guided rollback and traffic reroute protected customers and reduced blast radius.'],
            ['Next move', 'Export a one-page briefing for executives and customers, then monitor watchlist regions.']
          ],
          regions: [
            { cls: 'na severity-healthy', name: 'North America', title: 'Healthy · 97', detail: 'No active incident impact' },
            { cls: 'emea severity-degraded', name: 'Germany-West', title: 'Recovering · Risk 28', detail: 'Rollback complete · Error rate falling' },
            { cls: 'apac severity-risk', name: 'Singapore', title: 'Watchlist · Risk 64', detail: 'Preventive scaling staged' }
          ],
          services: [
            ['Customer Identity', 'severity-healthy', 'Health 98 · Risk 10', 'Identity remained healthy throughout the incident.'],
            ['API Gateway', 'severity-degraded', 'Health 84 · Risk 32', 'Gateway recovering after rollback completion.'],
            ['Payments Core', 'severity-degraded', 'Health 88 · Risk 28', 'Authorization error rates are normalizing.'],
            ['Voice Routing', 'severity-risk', 'Health 86 · Risk 64', 'APAC preventive watch remains active.']
          ],
          graph: [
            ['Rollback complete', 'var(--green)'],
            ['Gateway saturation reduced', 'var(--cyan)'],
            ['Payments normalizing', 'var(--purple)'],
            ['Executive summary ready', 'var(--amber)']
          ],
          timeline: [
            ['14:08', 'Rollback initiated', 'NovaOps executes approved safe actions.', 'action'],
            ['14:10', 'Traffic rerouted', '30% of Germany-West traffic shifts to Netherlands.', 'action'],
            ['14:11', 'Risk score drops', 'Risk score falls from 91 to 28 as latency normalizes.', 'recovery'],
            ['14:14', 'Customer-safe note drafted', 'Comms agent prepares external stakeholder messaging.', 'recovery'],
            ['14:16', 'Executive brief ready', 'Meeting-ready summary generated for leadership.', 'deploy']
          ],
          beforeAfter: [
            ['Before', 'Reactive troubleshooting', 'Teams gather logs, alerts, and meeting notes across disconnected systems.'],
            ['After', 'Executive-grade explainability', 'NovaOps converts recovery telemetry into a concise operational briefing suitable for leaders and customers.']
          ]
        }
      ]
    },
    {
      id: 'northstar',
      name: 'Northstar Telecom',
      mode: 'Advisory',
      guardrails: 'Simulation mode only for regional network changes',
      scenes: [
        {
          id: 'telecom',
          label: 'Regional service quality watch',
          title: 'Telecom Operations Briefing',
          status: 'South Germany voice quality degradation under investigation',
          health: '89',
          trend: '-5 vs 1h',
          incidents: '04',
          incidentDetail: '0 critical · 1 regional degradation',
          mapSummary: 'Northstar shows a regional voice-quality degradation in South Germany with field and NOC teams already engaged.',
          mapDetail: 'Customer impact is constrained to one regional cluster while NovaOps prepares field action recommendations.',
          incidentTitle: 'South Germany voice quality incident',
          incidentSummary: 'Packet loss and edge-device instability are reducing voice quality in one telecom region, but failover options are available and no national outage is in progress.',
          bullets: ['12 sites showing packet-loss spikes', 'Likely root trigger: edge aggregation device instability', 'Recommended action: fail over to secondary route and dispatch field ops'],
          evidence: [
            ['Network alarm', 'Edge aggregation node SG-EDGE-12 shows repeating flap events.'],
            ['Service quality', 'MOS score dropped below threshold at 12 impacted sites.'],
            ['Customer view', 'Business traffic is degraded but emergency routing remains available.']
          ],
          actions: ['Fail over affected sites to secondary route', 'Open field dispatch ticket', 'Send region-safe customer update'],
          primaryAction: 'Approve telecom mitigations',
          confidence: '84% confidence',
          customerMessage: 'We are addressing a localized voice-quality issue in South Germany and have already activated mitigation and field response procedures.',
          briefingNote: 'Industry adaptation: telecom workflows, field operations, and service-quality narratives all fit the same command center.',
          headlines: [
            ['Current posture', 'Regional telecom degradation is contained to 12 sites in South Germany.'],
            ['Probable cause', 'One unstable edge aggregation device is the likely trigger.'],
            ['Next action', 'Fail over traffic and dispatch field operations with customer-safe messaging.']
          ],
          regions: [
            { cls: 'na severity-healthy', name: 'Benelux Core', title: 'Healthy · 95', detail: 'No active site alarms' },
            { cls: 'emea severity-degraded', name: 'South Germany', title: 'Degraded · 12 sites', detail: 'Voice quality impacted · NOC engaged' },
            { cls: 'apac severity-healthy', name: 'Nordics Backbone', title: 'Healthy · 97', detail: 'Stable regional core' }
          ],
          services: [
            ['Voice Routing', 'severity-degraded', 'Health 71 · Risk 74', 'Regional voice quality degraded across 12 sites.'],
            ['Edge Aggregation', 'severity-critical', 'Health 42 · Risk 89', 'Edge device instability is driving packet loss.'],
            ['Field Operations', 'severity-risk', 'Response readiness 92', 'Dispatch package prepared for local team.'],
            ['Customer Care', 'severity-healthy', 'Health 94 · Risk 18', 'External comms ready for account teams.']
          ],
          graph: [
            ['Edge device SG-EDGE-12', 'var(--red)'],
            ['Regional voice routing', 'var(--purple)'],
            ['Site quality metrics', 'var(--cyan)'],
            ['Business customers', 'var(--green)']
          ],
          timeline: [
            ['15:02', 'Packet-loss alarms spike', 'Site and NOC telemetry show simultaneous quality degradation.', 'alert'],
            ['15:05', 'Primary device isolated', 'Topology graph highlights SG-EDGE-12 as likely trigger.', 'deploy'],
            ['15:07', 'Mitigation plan prepared', 'NovaOps recommends secondary route failover and field dispatch.', 'action'],
            ['15:10', 'Customer note drafted', 'Customer-safe regional notice prepared for account teams.', 'recovery']
          ],
          beforeAfter: [
            ['Before', 'Network teams chase alarms', 'Voice, edge, and customer-care teams see fragmented signals and delayed ownership.'],
            ['After', 'Regional service-quality command', 'NovaOps shows site alarms, business exposure, and next actions in one telecom-specific view.']
          ]
        }
      ]
    }
  ]
};

const elements = {
  tenantSelect: document.getElementById('tenant-select'),
  sceneSelect: document.getElementById('scene-select'),
  queryInput: document.getElementById('query-input'),
  globalHealth: document.getElementById('global-health'),
  healthTrend: document.getElementById('health-trend'),
  incidentCount: document.getElementById('incident-count'),
  incidentDetail: document.getElementById('incident-detail'),
  automationMode: document.getElementById('automation-mode'),
  guardrailStatus: document.getElementById('guardrail-status'),
  heroTitle: document.getElementById('hero-title'),
  scenePill: document.getElementById('scene-pill'),
  businessPill: document.getElementById('business-pill'),
  mapSummary: document.getElementById('map-summary'),
  mapDetail: document.getElementById('map-detail'),
  regionGrid: document.getElementById('region-grid'),
  serviceGrid: document.getElementById('service-grid'),
  storyStrip: document.getElementById('story-strip'),
  graphTag: document.getElementById('graph-tag'),
  dependencyGraph: document.getElementById('dependency-graph'),
  briefingList: document.getElementById('briefing-list'),
  incidentTitle: document.getElementById('incident-title'),
  incidentSummary: document.getElementById('incident-summary'),
  incidentBullets: document.getElementById('incident-bullets'),
  evidenceStack: document.getElementById('evidence-stack'),
  actionTitle: document.getElementById('action-title'),
  confidenceValue: document.getElementById('confidence-value'),
  actionList: document.getElementById('action-list'),
  primaryAction: document.getElementById('primary-action'),
  customerMessage: document.getElementById('customer-message'),
  briefingNote: document.getElementById('briefing-note'),
  timelineTrack: document.getElementById('timeline-track'),
  beforeAfter: document.getElementById('before-after'),
  railTabs: document.getElementById('rail-tabs'),
  playTourButton: document.getElementById('play-tour-button'),
  briefingButton: document.getElementById('briefing-button')
};

let currentTenantId = appData.tenants[0].id;
let currentSceneId = appData.tenants[0].scenes[0].id;
let tourTimer = null;

function getCurrentTenant() {
  return appData.tenants.find((tenant) => tenant.id === currentTenantId);
}

function getCurrentScene() {
  return getCurrentTenant().scenes.find((scene) => scene.id === currentSceneId);
}

function populateSelect(select, options, labelKey = 'label', valueKey = 'id') {
  select.innerHTML = options
    .map((option) => `<option value="${option[valueKey]}">${option[labelKey] ?? option.name}</option>`)
    .join('');
}

function renderRegions(scene) {
  elements.regionGrid.innerHTML = scene.regions
    .map(
      (region) => `
        <article class="region-card ${region.cls}">
          <span>${region.name}</span>
          <strong>${region.title}</strong>
          <small>${region.detail}</small>
        </article>
      `
    )
    .join('');
}

function renderServices(scene) {
  elements.serviceGrid.innerHTML = scene.services
    .map(
      ([name, severityClass, stats, detail]) => `
        <article class="service-card ${severityClass}">
          <h3>${name}</h3>
          <p>${stats}</p>
          <span>${detail}</span>
        </article>
      `
    )
    .join('');
}

function renderHeadlines(scene) {
  elements.storyStrip.innerHTML = scene.headlines
    .map(
      ([title, detail]) => `
        <article class="story-card">
          <p>${title}</p>
          <h3>${detail}</h3>
        </article>
      `
    )
    .join('');
}

function renderGraph(scene) {
  elements.dependencyGraph.innerHTML = scene.graph
    .map(
      ([label, color]) => `
        <div class="graph-node" style="color:${color}">${label}</div>
      `
    )
    .join('');
}

function renderBriefing(scene) {
  elements.briefingList.innerHTML = scene.headlines.map(([, detail]) => `<li>${detail}</li>`).join('');
}

function renderBullets(scene) {
  elements.incidentBullets.innerHTML = scene.bullets.map((item) => `<li>${item}</li>`).join('');
}

function renderEvidence(scene) {
  elements.evidenceStack.innerHTML = scene.evidence
    .map(
      ([title, detail]) => `
        <article class="evidence-item">
          <h4>${title}</h4>
          <p>${detail}</p>
        </article>
      `
    )
    .join('');
}

function renderActions(scene) {
  elements.actionList.innerHTML = scene.actions
    .map(
      (action) => `
        <article class="action-item">
          <h4>Action</h4>
          <p>${action}</p>
        </article>
      `
    )
    .join('');
}

function renderTimeline(scene) {
  elements.timelineTrack.innerHTML = scene.timeline
    .map(
      ([time, title, detail, kind]) => `
        <article class="timeline-event">
          <span class="time"><i class="dot ${kind}"></i>${time}</span>
          <h3>${title}</h3>
          <p>${detail}</p>
        </article>
      `
    )
    .join('');
}

function renderBeforeAfter(scene) {
  elements.beforeAfter.innerHTML = scene.beforeAfter
    .map(
      ([label, title, detail]) => `
        <article>
          <span>${label}</span>
          <h3>${title}</h3>
          <p>${detail}</p>
        </article>
      `
    )
    .join('');
}

function renderScene() {
  const tenant = getCurrentTenant();
  const scene = getCurrentScene();

  elements.automationMode.textContent = tenant.mode;
  elements.guardrailStatus.textContent = tenant.guardrails;
  elements.globalHealth.textContent = scene.health;
  elements.healthTrend.textContent = scene.trend;
  elements.incidentCount.textContent = scene.incidents;
  elements.incidentDetail.textContent = scene.incidentDetail;
  elements.heroTitle.textContent = scene.title;
  elements.scenePill.textContent = scene.label;
  elements.businessPill.textContent = scene.status;
  elements.mapSummary.textContent = scene.mapSummary;
  elements.mapDetail.textContent = scene.mapDetail;
  elements.incidentTitle.textContent = scene.incidentTitle;
  elements.incidentSummary.textContent = scene.incidentSummary;
  elements.actionTitle.textContent = scene.primaryAction;
  elements.confidenceValue.textContent = scene.confidence;
  elements.primaryAction.textContent = scene.primaryAction;
  elements.customerMessage.textContent = scene.customerMessage;
  elements.briefingNote.textContent = scene.briefingNote;
  elements.graphTag.textContent = tenant.name;

  renderRegions(scene);
  renderServices(scene);
  renderHeadlines(scene);
  renderGraph(scene);
  renderBriefing(scene);
  renderBullets(scene);
  renderEvidence(scene);
  renderActions(scene);
  renderTimeline(scene);
  renderBeforeAfter(scene);
}

function renderTenant(tenantId) {
  currentTenantId = tenantId;
  const tenant = getCurrentTenant();
  populateSelect(elements.sceneSelect, tenant.scenes);
  currentSceneId = tenant.scenes[0].id;
  renderScene();
}

function activateTab(tabName) {
  document.querySelectorAll('.rail-tabs button').forEach((button) => {
    button.classList.toggle('active', button.dataset.tab === tabName);
  });

  document.querySelectorAll('[id^="tab-"]').forEach((panel) => {
    panel.classList.toggle('hidden', panel.id !== `tab-${tabName}`);
  });
}

function answerQuery() {
  const query = elements.queryInput.value.toLowerCase();
  const scene = getCurrentScene();

  if (query.includes('customer')) {
    activateTab('briefing');
    elements.customerMessage.textContent = scene.customerMessage;
    return;
  }

  if (query.includes('why') || query.includes('changed')) {
    activateTab('explain');
    return;
  }

  if (query.includes('act') || query.includes('approve') || query.includes('should')) {
    activateTab('act');
    return;
  }

  activateTab('ask');
}

function cycleScenes() {
  const tenant = getCurrentTenant();
  const currentIndex = tenant.scenes.findIndex((scene) => scene.id === currentSceneId);
  const nextScene = tenant.scenes[(currentIndex + 1) % tenant.scenes.length];
  currentSceneId = nextScene.id;
  elements.sceneSelect.value = currentSceneId;
  renderScene();
}

populateSelect(elements.tenantSelect, appData.tenants, 'name', 'id');
renderTenant(currentTenantId);
activateTab('ask');

if (appData.tenants[0].scenes.length > 0) {
  elements.sceneSelect.value = currentSceneId;
}

elements.tenantSelect.addEventListener('change', (event) => {
  clearInterval(tourTimer);
  tourTimer = null;
  renderTenant(event.target.value);
  elements.sceneSelect.value = currentSceneId;
  activateTab('ask');
});

elements.sceneSelect.addEventListener('change', (event) => {
  currentSceneId = event.target.value;
  renderScene();
});

elements.queryInput.addEventListener('change', answerQuery);

elements.railTabs.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-tab]');
  if (!button) {
    return;
  }

  activateTab(button.dataset.tab);
});

elements.primaryAction.addEventListener('click', () => {
  const tenant = getCurrentTenant();
  const currentIndex = tenant.scenes.findIndex((scene) => scene.id === currentSceneId);
  const nextScene = tenant.scenes[Math.min(currentIndex + 1, tenant.scenes.length - 1)];
  currentSceneId = nextScene.id;
  elements.sceneSelect.value = currentSceneId;
  renderScene();
  activateTab('briefing');
});

elements.playTourButton.addEventListener('click', () => {
  if (tourTimer) {
    clearInterval(tourTimer);
    tourTimer = null;
    elements.playTourButton.textContent = 'Play demo story';
    return;
  }

  elements.playTourButton.textContent = 'Stop demo story';
  cycleScenes();
  tourTimer = setInterval(cycleScenes, 5000);
});

elements.briefingButton.addEventListener('click', () => {
  activateTab('briefing');
  elements.briefingNote.textContent = `${getCurrentTenant().name} executive briefing ready: ${getCurrentScene().headlines
    .map(([title]) => title)
    .join(' · ')}.`;
});
