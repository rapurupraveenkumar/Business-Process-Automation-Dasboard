import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Terminal, 
  Workflow, 
  RotateCw, 
  Search, 
  Filter, 
  User, 
  Clock, 
  AlertTriangle, 
  CheckCircle,
  MoreVertical
} from 'lucide-react';

export default function BotRegistry({ 
  bots, 
  onTriggerRun, 
  onTogglePause, 
  onViewLogs, 
  onViewWorkflow 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const departments = ['All', 'Finance', 'HR & IT', 'Customer Service', 'Supply Chain', 'Marketing'];
  const statuses = ['All', 'running', 'idle', 'failed', 'scheduled', 'paused'];

  const filteredBots = bots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bot.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          bot.assignedOwner.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'All' || bot.department.includes(selectedDept);
    const matchesStatus = selectedStatus === 'All' || bot.status === selectedStatus;
    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Search & Filter Header */}
      <div className="glass-panel" style={{ padding: '16px 20px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative', minWidth: '280px', flex: '1' }}>
          <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            className="input-field"
            placeholder="Search automation scripts by name, ID, or owner..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '38px' }}
          />
        </div>

        {/* Department Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.775rem',
                fontWeight: 600,
                border: selectedDept === dept ? '1px solid var(--accent-blue)' : '1px solid var(--border-color)',
                background: selectedDept === dept ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedDept === dept ? '#60A5FA' : 'var(--text-secondary)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s'
              }}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Status Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Filter size={15} color="var(--text-muted)" />
          <select
            className="input-field"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            style={{ width: 'auto', padding: '6px 12px', fontSize: '0.8rem' }}
          >
            {statuses.map((st) => (
              <option key={st} value={st}>
                Status: {st.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Automation Scripts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '20px' }}>
        {filteredBots.map((bot) => {
          const isRunning = bot.status === 'running';
          const isFailed = bot.status === 'failed';
          const isPaused = bot.status === 'paused';

          return (
            <div key={bot.id} className="glass-panel" style={{
              padding: '22px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              position: 'relative',
              borderColor: isFailed ? 'rgba(244, 63, 94, 0.4)' : isRunning ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-color)'
            }}>
              <div>
                {/* Card Top Meta */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={`badge badge-${bot.status}`}>
                      <span className={`pulse-dot ${bot.status}`} />
                      {bot.status}
                    </span>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {bot.id}
                    </span>
                  </div>

                  <span style={{
                    fontSize: '0.725rem',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: 'var(--text-secondary)',
                    fontWeight: 600
                  }}>
                    {bot.type}
                  </span>
                </div>

                {/* Title & Department */}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  {bot.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '14px', lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {bot.description}
                </p>

                {/* Key Metrics Strip */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(15, 23, 42, 0.5)',
                  marginBottom: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.04)'
                }}>
                  <div>
                    <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)', display: 'block' }}>Success Rate</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: bot.successRate > 95 ? 'var(--accent-emerald)' : 'var(--accent-amber)' }}>
                      {bot.successRate}%
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)', display: 'block' }}>Saved / Wk</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {bot.hoursSavedPerWeek} hrs
                    </span>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.675rem', color: 'var(--text-muted)', display: 'block' }}>Monthly ROI</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>
                      ${bot.estMonthlyCostSavings}
                    </span>
                  </div>
                </div>

                {/* Owner & Schedule Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <User size={13} color="var(--text-muted)" />
                    <span>{bot.assignedOwner}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={13} color="var(--text-muted)" />
                    <span>Last ran: {bot.lastRunTime} (Avg {bot.avgDuration})</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                gap: '8px',
                paddingTop: '12px',
                borderTop: '1px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => onTriggerRun(bot.id)}
                    className="btn btn-primary"
                    style={{ padding: '6px 12px', fontSize: '0.775rem' }}
                    title="Trigger immediate execution"
                  >
                    <Play size={13} fill="currentColor" />
                    <span>{isRunning ? 'Running...' : 'Run Now'}</span>
                  </button>

                  <button
                    onClick={() => onTogglePause(bot.id)}
                    className="btn btn-secondary"
                    style={{ padding: '6px 10px', fontSize: '0.775rem' }}
                    title={isPaused ? "Resume execution schedule" : "Pause script schedule"}
                  >
                    {isPaused ? <Play size={13} color="var(--accent-emerald)" /> : <Pause size={13} color="var(--accent-amber)" />}
                  </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button
                    onClick={() => onViewWorkflow(bot)}
                    className="btn btn-secondary"
                    style={{ padding: '6px 10px', fontSize: '0.775rem' }}
                    title="View Graph Pipeline"
                  >
                    <Workflow size={14} color="#60A5FA" />
                  </button>

                  <button
                    onClick={() => onViewLogs(bot)}
                    className="btn btn-secondary"
                    style={{ padding: '6px 10px', fontSize: '0.775rem' }}
                    title="View Live Logs"
                  >
                    <Terminal size={14} color="var(--accent-emerald)" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
