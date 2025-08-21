import { useState, useEffect } from 'react';
import { Header } from './dashboard/Header';
import { StatusTiles } from './dashboard/StatusTiles';
import { TrendPanels } from './dashboard/TrendPanels';
import { AlarmsSection } from './dashboard/AlarmsSection';
import { ChatbotPanel } from './dashboard/ChatbotPanel';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export interface DashboardData {
  // Temperature readings
  T2_temp_mean: number | null;
  T1_temp_mean: number | null;
  T0_temp_mean: number | null;
  TH_temp_mean: number | null;
  
  // Temperature fallbacks
  T2_1_ambient_temp: number | null;
  T2_2_ambient_temp: number | null;
  T1_1_cold_air_temp: number | null;
  T1_2_cold_air_temp: number | null;
  T0_1_air_outlet_temp: number | null;
  T0_2_air_outlet_temp: number | null;
  TH_1_supply_air_temp: number | null;
  TH_2_supply_air_temp: number | null;
  
  // Pressures
  LP_value: number | null;
  HP_value: number | null;
  LP_set_point: number | null;
  HP_set_point: number | null;
  
  // Setpoints
  T1_set_point: number | null;
  TH_T1_set_point: number | null;
  
  // Actuator outputs
  Blower_speed: number | null;
  Cond_fan_speed: number | null;
  Hot_valve_speed: number | null;
  AHT_vale_speed: number | null;
  Heater_speed: number | null;
  
  // Digital states
  Compressor_on_Q0_4: string | boolean;
  Blower_drive_on_Q0_0: string | boolean;
  Condenser_fan_drive_on_Q0_3: string | boolean;
  Hot_gas_valve_on_Q0_7: string | boolean;
  Heater_drive_on_Q0_2: string | boolean;
  
  // Modes
  Auto_mode: string | boolean;
  Manual_mode: string | boolean;
  Aeration_mode: string | boolean;
  Continuous_mode: string | boolean;
  
  // Health & faults
  Chiller_healthy_on_Q1_1: string | boolean;
  Chiller_Fault_on_Q2_0: string | boolean;
  Collective_Trouble_Signal_on_Q2_1: string | boolean;
  Fault_code: number | null;
  
  // Fault bits
  High_Pressure_Fault: string | boolean;
  Low_Pressure_Fault: string | boolean;
  Three_phase_monitor_fault: string | boolean;
  Compressor_motor_overheat: string | boolean;
  Anti_Freeze_Protection: string | boolean;
  TH_Temp_more_than_50C: string | boolean;
  
  // Sensor faults
  Ambient_Temp_Sensor_T2_1_Open: string | boolean;
  Ambient_Temp_Sensor_T2_1_Short_Circuit: string | boolean;
  Cold_Air_Temp_Sensor_T1_1_Open: string | boolean;
  Cold_Air_Temp_Sensor_T1_1_Short_Circuit: string | boolean;
  
  // Runtime
  Running_hours: number | null;
  Running_time_hour: number | null;
  Running_time_minute: number | null;
  Compressor_timer: number | null;
  
  // Timestamp
  created_at: string;
}

export interface TrendData {
  timestamp: string;
  ambient: number | null;
  return: number | null;
  supply: number | null;
  afterHeater: number | null;
  lpPressure: number | null;
  hpPressure: number | null;
  lpSetpoint: number | null;
  hpSetpoint: number | null;
  blowerSpeed: number | null;
  condFanSpeed: number | null;
  hotValveSpeed: number | null;
  heaterSpeed: number | null;
}

export const Dashboard = () => {
  const [currentData, setCurrentData] = useState<DashboardData | null>(null);
  const [trendData, setTrendData] = useState<TrendData[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chatPanelOpen, setChatPanelOpen] = useState(false);
  const { toast } = useToast();

  // Fetch latest HVAC data from Supabase
  const fetchCurrentData = async (): Promise<DashboardData | null> => {
    const { data, error } = await supabase
      .from('gtpl_114_gt_140e_s7_1200')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (error) {
      console.error('Error fetching current data:', error);
      return null;
    }

    // Transform database record to match DashboardData interface
    return {
      T2_temp_mean: data.t2_temp_mean,
      T1_temp_mean: data.t1_temp_mean,
      T0_temp_mean: data.t0_temp_mean,
      TH_temp_mean: data.th_temp_mean,
      
      T2_1_ambient_temp: data.t2_1_ambient_temp,
      T2_2_ambient_temp: data.t2_2_ambient_temp,
      T1_1_cold_air_temp: data.t1_1_cold_air_temp,
      T1_2_cold_air_temp: data.t1_2_cold_air_temp,
      T0_1_air_outlet_temp: data.t0_1_air_outlet_temp,
      T0_2_air_outlet_temp: data.t0_2_air_outlet_temp,
      TH_1_supply_air_temp: data.th_1_supply_air_temp,
      TH_2_supply_air_temp: data.th_2_supply_air_temp,
      
      LP_value: data.lp_value,
      HP_value: data.hp_value,
      LP_set_point: data.lp_set_point,
      HP_set_point: data.hp_set_point,
      
      T1_set_point: data.t1_set_point,
      TH_T1_set_point: data.th_t1_set_point,
      
      Blower_speed: data.blower_speed,
      Cond_fan_speed: data.cond_fan_speed,
      Hot_valve_speed: data.hot_valve_speed,
      AHT_vale_speed: data.aht_vale_speed,
      Heater_speed: data.heater_speed,
      
      Compressor_on_Q0_4: data.compressor_on_q0_4,
      Blower_drive_on_Q0_0: data.blower_drive_on_q0_0,
      Condenser_fan_drive_on_Q0_3: data.condenser_fan_drive_on_q0_3,
      Hot_gas_valve_on_Q0_7: data.hot_gas_valve_on_q0_7,
      Heater_drive_on_Q0_2: data.heater_drive_on_q0_2,
      
      Auto_mode: data.auto_mode,
      Manual_mode: data.manual_mode,
      Aeration_mode: data.aeration_mode,
      Continuous_mode: data.continuous_mode,
      
      Chiller_healthy_on_Q1_1: data.chiller_healthy_on_q1_1,
      Chiller_Fault_on_Q2_0: data.chiller_fault_on_q2_0,
      Collective_Trouble_Signal_on_Q2_1: data.collective_trouble_signal_on_q2_1,
      Fault_code: data.fault_code ? parseInt(data.fault_code) : null,
      
      High_Pressure_Fault: data.high_pressure_fault,
      Low_Pressure_Fault: data.low_pressure_fault,
      Three_phase_monitor_fault: data.three_phase_monitor_fault,
      Compressor_motor_overheat: data.compressor_motor_overheat,
      Anti_Freeze_Protection: data.anti_freeze_protection,
      TH_Temp_more_than_50C: data.th_temp_more_than_50c,
      
      Ambient_Temp_Sensor_T2_1_Open: data.ambient_temp_sensor_t2_1_open,
      Ambient_Temp_Sensor_T2_1_Short_Circuit: data.ambient_temp_sensor_t2_1_short_circuit,
      Cold_Air_Temp_Sensor_T1_1_Open: data.cold_air_temp_sensor_t1_1_open,
      Cold_Air_Temp_Sensor_T1_1_Short_Circuit: data.cold_air_temp_sensor_t1_1_short_circuit,
      
      Running_hours: data.running_hours,
      Running_time_hour: data.running_time_hour,
      Running_time_minute: data.running_time_minute,
      Compressor_timer: data.compressor_timer,
      
      created_at: data.created_at,
    };
  };

  // Fetch trend data for the last 24 hours
  const fetchTrendData = async (): Promise<TrendData[]> => {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    const { data, error } = await supabase
      .from('gtpl_114_gt_140e_s7_1200')
      .select('*')
      .gte('created_at', twentyFourHoursAgo.toISOString())
      .order('created_at', { ascending: true })
      .limit(288); // Approximately every 5 minutes for 24 hours

    if (error) {
      console.error('Error fetching trend data:', error);
      return [];
    }

    // Map database records to TrendData interface
    return data.map(record => ({
      timestamp: record.created_at,
      ambient: record.t2_temp_mean || record.t2_1_ambient_temp || record.t2_2_ambient_temp,
      return: record.t1_temp_mean || record.t1_1_cold_air_temp || record.t1_2_cold_air_temp,
      supply: record.t0_temp_mean || record.t0_1_air_outlet_temp || record.t0_2_air_outlet_temp,
      afterHeater: record.th_temp_mean || record.th_1_supply_air_temp || record.th_2_supply_air_temp,
      lpPressure: record.lp_value,
      hpPressure: record.hp_value,
      lpSetpoint: record.lp_set_point,
      hpSetpoint: record.hp_set_point,
      blowerSpeed: record.blower_speed,
      condFanSpeed: record.cond_fan_speed,
      hotValveSpeed: record.hot_valve_speed,
      heaterSpeed: record.heater_speed,
    }));
  };

  const fetchData = async () => {
    try {
      // Fetch current data (latest record)
      const current = await fetchCurrentData();
      if (current) {
        setCurrentData(current);
        setLastUpdated(new Date());
      }
      
      // Fetch trend data only on initial load
      if (isLoading) {
        const trends = await fetchTrendData();
        setTrendData(trends);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
      toast({
        title: "Connection Error",
        description: "Failed to fetch latest data. Retrying...",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchData();
    
    // Auto-refresh current data every 3 seconds for realtime feel
    const interval = setInterval(async () => {
      const current = await fetchCurrentData();
      if (current) {
        setCurrentData(current);
        setLastUpdated(new Date());
      }
    }, 3000);
    
    // Refresh trend data every 5 minutes
    const trendInterval = setInterval(async () => {
      const trends = await fetchTrendData();
      setTrendData(trends);
    }, 300000);
    
    return () => {
      clearInterval(interval);
      clearInterval(trendInterval);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="glass-card p-8 text-center">
          <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading industrial dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-4 space-y-6">
        {/* Header with KPIs */}
        <Header data={currentData} lastUpdated={lastUpdated} />
        
        {/* Status Tiles */}
        <StatusTiles data={currentData} />
        
        {/* Trend Panels */}
        <TrendPanels trendData={trendData} />
        
        {/* Alarms Section */}
        <AlarmsSection data={currentData} />
      </div>
      
      {/* Chatbot Panel */}
      <ChatbotPanel 
        isOpen={chatPanelOpen} 
        onToggle={() => setChatPanelOpen(!chatPanelOpen)}
      />
    </div>
  );
};