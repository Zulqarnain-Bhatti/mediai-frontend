import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, UserPlus, Stethoscope, Syringe, 
  FlaskConical, Bot, FileText, Settings, LogOut, Activity,
  Search, Bell, UserCircle, AlertTriangle, FileClock, Calendar,
  FileUp, Eye, Edit, Filter, User, X, Save, Pill, History as HistoryIcon,
  Sparkles, ArrowLeft, Heart, Thermometer, Zap, Droplet, RefreshCw,
  Upload, Download, Printer, CheckCircle, Shield, Building
} from 'lucide-react';

// ==========================================
// 1. GLOBAL NAVIGATION & HEADER COMPONENTS
// ==========================================

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'add-patient', label: 'Add Patient', icon: UserPlus },
    { id: 'doctor', label: 'Doctor Panel', icon: Stethoscope },
    { id: 'nurse', label: 'Nurse Panel', icon: Syringe },
    { id: 'laboratory', label: 'Laboratory', icon: FlaskConical },
    { id: 'ai-assistant', label: 'AI Assistant', icon: Bot },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col justify-between h-screen sticky top-0 border-r border-slate-800 shadow-xl">
      <div>
        <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-800">
          <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-500/30">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wider text-white">Medi<span className="text-blue-500">AI</span></h1>
            <p className="text-xs text-slate-500 font-medium">Smart Hospital Hub</p>
          </div>
        </div>

        <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-180px)]">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                    : 'hover:bg-slate-800 hover:text-white text-slate-400'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-slate-800">
        <button 
          onClick={() => alert('Logged out successfully')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-red-500 hover:bg-red-500/10 transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function Navbar({ userRole = "Admin" }) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-30 shadow-xs">
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          placeholder="Search global records, patients, IDs..."
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all text-slate-700 placeholder-slate-400"
        />
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <button className="p-2.5 text-slate-600 hover:bg-slate-100 rounded-xl relative transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-600 rounded-full ring-2 ring-white animate-ping"></span>
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-600 rounded-full ring-2 ring-white"></span>
          </button>
        </div>

        <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-bold flex items-center justify-center border border-blue-100">
            <UserCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800 leading-none">Dr. Alex Morgan</h4>
            <span className="inline-block mt-1 px-2 py-0.5 bg-blue-50 text-blue-600 text-[11px] font-semibold rounded-md border border-blue-100/50 uppercase tracking-wider">
              {userRole}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

// ==========================================
// 2. DASHBOARD MODULE
// ==========================================

function Dashboard({ setActiveTab }) {
  const statsCards = [
    { label: "Total Patients", value: "1,482", icon: Users, color: "bg-blue-50 text-blue-600 border-blue-100" },
    { label: "Today's Patients", value: "48", icon: Users, color: "bg-green-50 text-green-600 border-green-100" },
    { label: "Doctors Available", value: "18", icon: Stethoscope, color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { label: "Today's Appointments", value: "32", icon: Calendar, color: "bg-purple-50 text-purple-600 border-purple-100" },
    { label: "Critical Patients", value: "05", icon: AlertTriangle, color: "bg-red-50 text-red-600 border-red-100" },
    { label: "Pending Reports", value: "12", icon: FileClock, color: "bg-orange-50 text-orange-600 border-orange-100" },
  ];

  const aiAlerts = [
    { id: 1, type: "BP Critical", patient: "John Doe (ID: #1042)", detail: "BP recorded at 180/110 mmHg", color: "border-red-200 bg-red-50/50 text-red-600" },
    { id: 2, type: "Sugar High", patient: "Sarah Smith (ID: #1089)", detail: "Blood Glucose at 290 mg/dL", color: "border-orange-200 bg-orange-50/50 text-orange-600" },
    { id: 3, type: "Oxygen Low", patient: "Robert Fox (ID: #1012)", detail: "SpO2 dropped to 88%", color: "border-red-200 bg-red-50/50 text-red-600" },
  ];

  const recentPatients = [
    { id: "#1042", name: "John Doe", doctor: "Dr. Sarah Jenkins", status: "Critical", statusColor: "bg-red-100 text-red-600" },
    { id: "#1043", name: "Emma Watson", doctor: "Dr. Robert Chen", status: "Stable", statusColor: "bg-green-100 text-green-600" },
    { id: "#1044", name: "Michael Vance", doctor: "Dr. Lisa Ray", status: "Observation", statusColor: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Hospital Overview Dashboard</h2>
          <p className="text-sm text-slate-500">Real-time health telemetry and hospital operations tracking.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActiveTab('add-patient')}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all"
          >
            <UserPlus className="w-4 h-4" />
            <span>+ Add Patient</span>
          </button>
          <button 
            onClick={() => setActiveTab('doctor')}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 rounded-xl shadow-xs transition-all"
          >
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>+ New Appointment</span>
          </button>
          <button 
            onClick={() => setActiveTab('laboratory')}
            className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 rounded-xl shadow-xs transition-all"
          >
            <FileUp className="w-4 h-4 text-green-600" />
            <span>+ Upload Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {statsCards.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h3>
              </div>
              <div className={`p-4 rounded-2xl border ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-red-600 animate-pulse" />
              <span>AI Health Alerts</span>
            </h3>
            <span className="px-2.5 py-0.5 bg-red-50 text-red-600 font-bold text-xs rounded-full border border-red-100">3 Urgent</span>
          </div>
          <div className="space-y-3">
            {aiAlerts.map(alert => (
              <div key={alert.id} className={`p-4 rounded-xl border ${alert.color} transition-all`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">⚠️ {alert.type}</span>
                  <span className="text-xs font-semibold opacity-80">{alert.patient}</span>
                </div>
                <p className="text-xs mt-1 font-medium">{alert.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-slate-900">Recent Patients Registry</h3>
            <button 
              onClick={() => setActiveTab('patients')}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              View All Patients →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold text-xs">
                  <th className="pb-3">Patient ID</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Doctor</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentPatients.map((pat, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3.5 font-mono text-xs font-bold text-slate-600">{pat.id}</td>
                    <td className="py-3.5 font-bold text-slate-800">{pat.name}</td>
                    <td className="py-3.5 text-slate-600 text-xs font-medium">{pat.doctor}</td>
                    <td className="py-3.5">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${pat.statusColor}`}>
                        {pat.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. PATIENTS LIST & DIRECTORY
// ==========================================

function Patients({ setActiveTab, setSelectedPatient }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchFilterBy, setSearchFilterBy] = useState('all');

  const patientsList = [
    { id: '#1042', name: 'John Doe', age: 45, gender: 'Male', cnic: '35202-1234567-1', phone: '+92 300 1234567', doctor: 'Dr. Sarah Jenkins', status: 'Critical', statusColor: 'bg-red-100 text-red-600' },
    { id: '#1043', name: 'Emma Watson', age: 29, gender: 'Female', cnic: '35202-7654321-2', phone: '+92 321 9876543', doctor: 'Dr. Robert Chen', status: 'Stable', statusColor: 'bg-green-100 text-green-600' },
    { id: '#1044', name: 'Michael Vance', age: 52, gender: 'Male', cnic: '35202-4455667-3', phone: '+92 333 4455667', doctor: 'Dr. Lisa Ray', status: 'Observation', statusColor: 'bg-orange-100 text-orange-600' },
    { id: '#1045', name: 'Ayesha Khan', age: 34, gender: 'Female', cnic: '35202-9988776-4', phone: '+92 312 5544332', doctor: 'Dr. Sarah Jenkins', status: 'Stable', statusColor: 'bg-green-100 text-green-600' },
  ];

  const filteredPatients = patientsList.filter(patient => {
    const term = searchTerm.toLowerCase();
    if (searchFilterBy === 'cnic') return patient.cnic.toLowerCase().includes(term);
    if (searchFilterBy === 'phone') return patient.phone.toLowerCase().includes(term);
    if (searchFilterBy === 'id') return patient.id.toLowerCase().includes(term);
    if (searchFilterBy === 'name') return patient.name.toLowerCase().includes(term);
    return (
      patient.name.toLowerCase().includes(term) ||
      patient.id.toLowerCase().includes(term) ||
      patient.cnic.toLowerCase().includes(term) ||
      patient.phone.toLowerCase().includes(term)
    );
  });

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900">Patients Registry</h2>
          <p className="text-sm text-slate-500">Search, track, and manage all hospital patient records.</p>
        </div>
        <button 
          onClick={() => setActiveTab('add-patient')}
          className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/20 transition-all"
        >
          <UserPlus className="w-4 h-4" />
          <span>+ Add Patient</span>
        </button>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search by ${searchFilterBy === 'all' ? 'CNIC, Phone, ID, Name' : searchFilterBy.toUpperCase()}...`}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 text-slate-700 placeholder-slate-400"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Search by:
          </span>
          <select 
            value={searchFilterBy}
            onChange={(e) => setSearchFilterBy(e.target.value)}
            className="px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
          >
            <option value="all">All Fields</option>
            <option value="cnic">CNIC</option>
            <option value="phone">Phone</option>
            <option value="id">Patient ID</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold text-xs uppercase tracking-wider">
              <tr>
                <th className="py-4 px-6">Photo</th>
                <th className="py-4 px-6">Patient ID</th>
                <th className="py-4 px-6">Name</th>
                <th className="py-4 px-6">CNIC / Phone</th>
                <th className="py-4 px-6">Doctor</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-4 px-6">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200">
                        <User className="w-5 h-5" />
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs font-bold text-slate-600">{patient.id}</td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900">{patient.name}</div>
                      <div className="text-xs text-slate-400">{patient.age} yrs • {patient.gender}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-xs font-semibold text-slate-700">{patient.cnic}</div>
                      <div className="text-xs text-slate-400">{patient.phone}</div>
                    </td>
                    <td className="py-4 px-6 text-xs font-medium text-slate-700">{patient.doctor}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${patient.statusColor}`}>
                        {patient.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => {
                            setSelectedPatient(patient);
                            setActiveTab('patient-profile');
                          }}
                          className="px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 font-semibold text-xs rounded-lg transition-all flex items-center gap-1"
                        >
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                        <button 
                          onClick={() => alert(`Editing profile for ${patient.name}`)}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-xs rounded-lg transition-all flex items-center gap-1"
                        >
                          <Edit className="w-3.5 h-3.5" /> Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-400 font-medium">
                    No matching patients found in the registry.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. ADD PATIENT FORM
// ==========================================

function AddPatient({ setActiveTab }) {
  const [formData, setFormData] = useState({
    patientName: '', fatherName: '', gender: 'Male', dob: '', age: '',
    cnic: '', phone: '', address: '', bloodGroup: 'O+', height: '',
    weight: '', allergy: '', emergencyName: '', emergencyRelation: '', emergencyPhone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Patient registered successfully!');
    setActiveTab('patients');
  };

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <UserPlus className="w-6 h-6 text-blue-600" />
            <span>Add New Patient Record</span>
          </h2>
          <p className="text-sm text-slate-500">Fill in complete personal, medical, and emergency contact details.</p>
        </div>
        <button 
          onClick={() => setActiveTab('patients')}
          className="p-2 text-slate-400 hover:text-slate-700 bg-white border border-slate-200 rounded-xl shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <h3 className="text-base font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span> Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Patient Name *</label>
              <input type="text" name="patientName" required value={formData.patientName} onChange={handleChange} placeholder="Full name" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 text-slate-700" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Father Name</label>
              <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father's name" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 text-slate-700" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Gender *</label>
              <select name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Age *</label>
              <input type="number" name="age" required value={formData.age} onChange={handleChange} placeholder="Years" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 text-slate-700" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">CNIC *</label>
              <input type="text" name="cnic" required value={formData.cnic} onChange={handleChange} placeholder="00000-0000000-0" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 text-slate-700" />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number *</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+92 300 0000000" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 text-slate-700" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <button type="button" onClick={() => setActiveTab('patients')} className="px-6 py-3 bg-slate-100 text-slate-700 font-bold text-sm rounded-xl">Cancel</button>
          <button type="submit" className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/20"><Save className="w-4 h-4" /> Save Record</button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// 5. PATIENT PROFILE HUB
// ==========================================

function PatientProfile({ patient, setActiveTab }) {
  const [activeTabSub, setActiveTabSub] = useState('overview');

  const currentPatient = patient || {
    id: '#1042', name: 'John Doe', age: 45, gender: 'Male', cnic: '35202-1234567-1',
    phone: '+92 300 1234567', doctor: 'Dr. Sarah Jenkins', status: 'Critical',
    address: 'House #42, Street 8, Sector F-7, Islamabad', bloodGroup: 'O+'
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'vitals', label: 'Vitals', icon: Activity },
    { id: 'medicines', label: 'Medicines', icon: Pill },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'history', label: 'History', icon: HistoryIcon },
    { id: 'ai-summary', label: 'AI Summary', icon: Sparkles },
  ];

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full">
      <div className="flex items-center gap-4">
        <button onClick={() => setActiveTab('patients')} className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50"><ArrowLeft className="w-5 h-5" /></button>
        <div>
          <h2 className="text-2xl font-black text-slate-900">Patient Electronic Health Record</h2>
          <p className="text-sm text-slate-500">Comprehensive patient history and telemetry</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl"><User className="w-8 h-8" /></div>
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-black text-slate-900">{currentPatient.name}</h3>
              <span className="px-2.5 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-md">{currentPatient.status}</span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1">ID: <span className="font-mono font-bold text-slate-700">{currentPatient.id}</span> • Attending: <span className="font-bold text-slate-800">{currentPatient.doctor}</span></p>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 flex gap-2 overflow-x-auto pb-0.5">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTabSub === tab.id;
          return (
            <button key={tab.id} onClick={() => setActiveTabSub(tab.id)} className={`flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition-all ${isActive ? 'border-blue-600 text-blue-600 bg-white rounded-t-xl' : 'border-transparent text-slate-500'}`}>
              <Icon className="w-4 h-4" /><span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        {activeTabSub === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-50 rounded-xl"><span className="text-xs text-slate-400 font-bold uppercase">Age & Gender</span><p className="text-base font-bold text-slate-800 mt-1">{currentPatient.age} Yrs / {currentPatient.gender}</p></div>
            <div className="p-4 bg-slate-50 rounded-xl"><span className="text-xs text-slate-400 font-bold uppercase">Blood Group</span><p className="text-base font-bold text-slate-800 mt-1">{currentPatient.bloodGroup}</p></div>
            <div className="p-4 bg-slate-50 rounded-xl"><span className="text-xs text-slate-400 font-bold uppercase">Phone</span><p className="text-base font-bold text-slate-800 mt-1">{currentPatient.phone}</p></div>
          </div>
        )}
        {activeTabSub === 'vitals' && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 bg-red-50/50 border border-red-100 rounded-xl text-center"><Heart className="w-5 h-5 text-red-600 mx-auto mb-1" /><span className="text-xs text-slate-500">Blood Pressure</span><p className="text-lg font-black text-red-600 mt-1">180/110 mmHg</p></div>
            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-center"><Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" /><span className="text-xs text-slate-500">Pulse Rate</span><p className="text-lg font-black text-slate-800 mt-1">98 BPM</p></div>
            <div className="p-4 bg-orange-50/50 border border-orange-100 rounded-xl text-center"><Thermometer className="w-5 h-5 text-orange-600 mx-auto mb-1" /><span className="text-xs text-slate-500">Temperature</span><p className="text-lg font-black text-slate-800 mt-1">101.2 °F</p></div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==========================================
// 6. DOCTOR PANEL MODULE
// ==========================================

function DoctorPanel() {
  const [selectedPatientId, setSelectedPatientId] = useState('#1042');
  const [formData, setFormData] = useState({
    symptoms: 'Headache, Dizziness, High BP spikes',
    diagnosis: 'Stage 2 Essential Hypertension with Diabetic flare',
    prescription: 'Amlodipine 10mg OD, Insulin Glargine 10 units at bedtime',
    tests: 'Routine Blood Panel, HbA1c, Serum Creatinine',
    doctorNotes: 'Monitor BP every 2 hours. Keep patient on low-sodium diet.',
    nextVisit: '2026-08-20'
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2"><Stethoscope className="w-6 h-6 text-blue-600" /><span>Doctor Clinical Console</span></h2>
          <p className="text-sm text-slate-500">Formulate diagnostic reports and digital prescriptions.</p>
        </div>
        <select value={selectedPatientId} onChange={(e) => setSelectedPatientId(e.target.value)} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-800">
          <option value="#1042">#1042 - John Doe</option>
          <option value="#1043">#1043 - Emma Watson</option>
        </select>
      </div>

      <form className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Symptoms</label>
            <textarea rows="3" name="symptoms" value={formData.symptoms} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Diagnosis</label>
            <textarea rows="3" name="diagnosis" value={formData.diagnosis} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Rx Prescription</label>
            <textarea rows="3" name="prescription" value={formData.prescription} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm font-mono" />
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-4 border-t">
          <button type="button" onClick={() => alert('Diagnosis saved!')} className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-bold text-sm rounded-xl"><Save className="w-4 h-4" /> Save Diagnosis</button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// 7. MAIN ROUTER / APPLICATION ROOT
// ==========================================

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar userRole="Admin" />
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
          {activeTab === 'patients' && <Patients setActiveTab={setActiveTab} setSelectedPatient={setSelectedPatient} />}
          {activeTab === 'add-patient' && <AddPatient setActiveTab={setActiveTab} />}
          {activeTab === 'patient-profile' && <PatientProfile patient={selectedPatient} setActiveTab={setActiveTab} />}
          {activeTab === 'doctor' && <DoctorPanel />}
          {['nurse', 'laboratory', 'ai-assistant', 'reports', 'settings'].includes(activeTab) && (
            <div className="p-8 text-center text-slate-500">
              <h2 className="text-xl font-bold uppercase tracking-wider text-slate-800">Module: {activeTab}</h2>
              <p className="mt-2 text-sm">Component shell loaded ready for data binding.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}