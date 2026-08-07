import mongoose from 'mongoose';

const auditLogSchema = new mongoose.Schema({
  action: { type: String, required: true },
  user: { type: String, required: true },
  ip: { type: String, default: '127.0.0.1' },
  timestamp: { type: Date, default: Date.now }
});

export const AuditLog = mongoose.model('AuditLog', auditLogSchema);
