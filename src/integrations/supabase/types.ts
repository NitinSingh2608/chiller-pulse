export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      categories: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          email: string | null
          id: number
          name: string | null
        }
        Insert: {
          email?: string | null
          id: number
          name?: string | null
        }
        Update: {
          email?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      documents: {
        Row: {
          content: string | null
          embedding: string | null
          id: number
          metadata: Json | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          id?: number
          metadata?: Json | null
        }
        Relationships: []
      }
      gtpl_114_gt_140e_s7_1200: {
        Row: {
          aeration_mode: boolean | null
          aht_vale_speed: number | null
          ambient_temp_sensor_t2_1_open: boolean | null
          ambient_temp_sensor_t2_1_short_circuit: boolean | null
          anti_freeze_protection: boolean | null
          auto_mode: boolean | null
          blower_drive_on_q0_0: boolean | null
          blower_speed: number | null
          chiller_fault_on_q2_0: boolean | null
          chiller_healthy_on_q1_1: boolean | null
          cold_air_temp_sensor_t1_1_open: boolean | null
          cold_air_temp_sensor_t1_1_short_circuit: boolean | null
          collective_trouble_signal_on_q2_1: boolean | null
          compressor_motor_overheat: boolean | null
          compressor_on_q0_4: boolean | null
          compressor_timer: number | null
          cond_fan_speed: number | null
          condenser_fan_drive_on_q0_3: boolean | null
          continuous_mode: boolean | null
          created_at: string | null
          fault_code: string | null
          heater_drive_on_q0_2: boolean | null
          heater_speed: number | null
          high_pressure_fault: boolean | null
          hot_gas_valve_on_q0_7: boolean | null
          hot_valve_speed: number | null
          hp_set_point: number | null
          hp_value: number | null
          id: number
          low_pressure_fault: boolean | null
          lp_set_point: number | null
          lp_value: number | null
          manual_mode: boolean | null
          running_hours: number | null
          running_time_hour: number | null
          running_time_minute: number | null
          t0_1_air_outlet_temp: number | null
          t0_2_air_outlet_temp: number | null
          t0_temp_mean: number | null
          t1_1_cold_air_temp: number | null
          t1_2_cold_air_temp: number | null
          t1_set_point: number | null
          t1_temp_mean: number | null
          t2_1_ambient_temp: number | null
          t2_2_ambient_temp: number | null
          t2_temp_mean: number | null
          th_1_supply_air_temp: number | null
          th_2_supply_air_temp: number | null
          th_t1_set_point: number | null
          th_temp_mean: number | null
          th_temp_more_than_50c: boolean | null
          three_phase_monitor_fault: boolean | null
        }
        Insert: {
          aeration_mode?: boolean | null
          aht_vale_speed?: number | null
          ambient_temp_sensor_t2_1_open?: boolean | null
          ambient_temp_sensor_t2_1_short_circuit?: boolean | null
          anti_freeze_protection?: boolean | null
          auto_mode?: boolean | null
          blower_drive_on_q0_0?: boolean | null
          blower_speed?: number | null
          chiller_fault_on_q2_0?: boolean | null
          chiller_healthy_on_q1_1?: boolean | null
          cold_air_temp_sensor_t1_1_open?: boolean | null
          cold_air_temp_sensor_t1_1_short_circuit?: boolean | null
          collective_trouble_signal_on_q2_1?: boolean | null
          compressor_motor_overheat?: boolean | null
          compressor_on_q0_4?: boolean | null
          compressor_timer?: number | null
          cond_fan_speed?: number | null
          condenser_fan_drive_on_q0_3?: boolean | null
          continuous_mode?: boolean | null
          created_at?: string | null
          fault_code?: string | null
          heater_drive_on_q0_2?: boolean | null
          heater_speed?: number | null
          high_pressure_fault?: boolean | null
          hot_gas_valve_on_q0_7?: boolean | null
          hot_valve_speed?: number | null
          hp_set_point?: number | null
          hp_value?: number | null
          id?: number
          low_pressure_fault?: boolean | null
          lp_set_point?: number | null
          lp_value?: number | null
          manual_mode?: boolean | null
          running_hours?: number | null
          running_time_hour?: number | null
          running_time_minute?: number | null
          t0_1_air_outlet_temp?: number | null
          t0_2_air_outlet_temp?: number | null
          t0_temp_mean?: number | null
          t1_1_cold_air_temp?: number | null
          t1_2_cold_air_temp?: number | null
          t1_set_point?: number | null
          t1_temp_mean?: number | null
          t2_1_ambient_temp?: number | null
          t2_2_ambient_temp?: number | null
          t2_temp_mean?: number | null
          th_1_supply_air_temp?: number | null
          th_2_supply_air_temp?: number | null
          th_t1_set_point?: number | null
          th_temp_mean?: number | null
          th_temp_more_than_50c?: boolean | null
          three_phase_monitor_fault?: boolean | null
        }
        Update: {
          aeration_mode?: boolean | null
          aht_vale_speed?: number | null
          ambient_temp_sensor_t2_1_open?: boolean | null
          ambient_temp_sensor_t2_1_short_circuit?: boolean | null
          anti_freeze_protection?: boolean | null
          auto_mode?: boolean | null
          blower_drive_on_q0_0?: boolean | null
          blower_speed?: number | null
          chiller_fault_on_q2_0?: boolean | null
          chiller_healthy_on_q1_1?: boolean | null
          cold_air_temp_sensor_t1_1_open?: boolean | null
          cold_air_temp_sensor_t1_1_short_circuit?: boolean | null
          collective_trouble_signal_on_q2_1?: boolean | null
          compressor_motor_overheat?: boolean | null
          compressor_on_q0_4?: boolean | null
          compressor_timer?: number | null
          cond_fan_speed?: number | null
          condenser_fan_drive_on_q0_3?: boolean | null
          continuous_mode?: boolean | null
          created_at?: string | null
          fault_code?: string | null
          heater_drive_on_q0_2?: boolean | null
          heater_speed?: number | null
          high_pressure_fault?: boolean | null
          hot_gas_valve_on_q0_7?: boolean | null
          hot_valve_speed?: number | null
          hp_set_point?: number | null
          hp_value?: number | null
          id?: number
          low_pressure_fault?: boolean | null
          lp_set_point?: number | null
          lp_value?: number | null
          manual_mode?: boolean | null
          running_hours?: number | null
          running_time_hour?: number | null
          running_time_minute?: number | null
          t0_1_air_outlet_temp?: number | null
          t0_2_air_outlet_temp?: number | null
          t0_temp_mean?: number | null
          t1_1_cold_air_temp?: number | null
          t1_2_cold_air_temp?: number | null
          t1_set_point?: number | null
          t1_temp_mean?: number | null
          t2_1_ambient_temp?: number | null
          t2_2_ambient_temp?: number | null
          t2_temp_mean?: number | null
          th_1_supply_air_temp?: number | null
          th_2_supply_air_temp?: number | null
          th_t1_set_point?: number | null
          th_temp_mean?: number | null
          th_temp_more_than_50c?: boolean | null
          three_phase_monitor_fault?: boolean | null
        }
        Relationships: []
      }
      gtpl_114_gt_140e_s7_1200_temp: {
        Row: {
          Aeration_duration_set: number | null
          Aeration_mode: boolean | null
          Aeration_start: boolean | null
          Aeration_stop: boolean | null
          AHT_vale_speed: number | null
          Auto_mode: boolean | null
          Auto_start: boolean | null
          Auto_stop: boolean | null
          Blower_speed: number | null
          Compressor_timer: number | null
          Continuous_mode: boolean | null
          created_at: string | null
          Fault_code: number | null
          Hot_valve_speed: number | null
          HP_value: number | null
          id: number
          LP_value: number | null
          Manual_mode: boolean | null
          Running_time_hour: number | null
          Running_time_minute: number | null
          T0_1_air_outlet_temp: number | null
          T0_2_air_outlet_temp: number | null
          T1_1_cold_air_temp: number | null
          T1_2_cold_air_temp: number | null
          T2_1_ambient_temp: number | null
          T2_2_ambient_temp: number | null
          TH_1_supply_air_temp: number | null
          TH_2_supply_air_temp: number | null
        }
        Insert: {
          Aeration_duration_set?: number | null
          Aeration_mode?: boolean | null
          Aeration_start?: boolean | null
          Aeration_stop?: boolean | null
          AHT_vale_speed?: number | null
          Auto_mode?: boolean | null
          Auto_start?: boolean | null
          Auto_stop?: boolean | null
          Blower_speed?: number | null
          Compressor_timer?: number | null
          Continuous_mode?: boolean | null
          created_at?: string | null
          Fault_code?: number | null
          Hot_valve_speed?: number | null
          HP_value?: number | null
          id?: number
          LP_value?: number | null
          Manual_mode?: boolean | null
          Running_time_hour?: number | null
          Running_time_minute?: number | null
          T0_1_air_outlet_temp?: number | null
          T0_2_air_outlet_temp?: number | null
          T1_1_cold_air_temp?: number | null
          T1_2_cold_air_temp?: number | null
          T2_1_ambient_temp?: number | null
          T2_2_ambient_temp?: number | null
          TH_1_supply_air_temp?: number | null
          TH_2_supply_air_temp?: number | null
        }
        Update: {
          Aeration_duration_set?: number | null
          Aeration_mode?: boolean | null
          Aeration_start?: boolean | null
          Aeration_stop?: boolean | null
          AHT_vale_speed?: number | null
          Auto_mode?: boolean | null
          Auto_start?: boolean | null
          Auto_stop?: boolean | null
          Blower_speed?: number | null
          Compressor_timer?: number | null
          Continuous_mode?: boolean | null
          created_at?: string | null
          Fault_code?: number | null
          Hot_valve_speed?: number | null
          HP_value?: number | null
          id?: number
          LP_value?: number | null
          Manual_mode?: boolean | null
          Running_time_hour?: number | null
          Running_time_minute?: number | null
          T0_1_air_outlet_temp?: number | null
          T0_2_air_outlet_temp?: number | null
          T1_1_cold_air_temp?: number | null
          T1_2_cold_air_temp?: number | null
          T2_1_ambient_temp?: number | null
          T2_2_ambient_temp?: number | null
          TH_1_supply_air_temp?: number | null
          TH_2_supply_air_temp?: number | null
        }
        Relationships: []
      }
      n8n_chat_histories: {
        Row: {
          id: number
          message: Json
          session_id: string
        }
        Insert: {
          id?: number
          message: Json
          session_id: string
        }
        Update: {
          id?: number
          message?: Json
          session_id?: string
        }
        Relationships: []
      }
      new_data_table: {
        Row: {
          Aeration_duration_set: number | null
          Aeration_mode: boolean | null
          Aeration_start: boolean | null
          Aeration_stop: boolean | null
          AHT_vale_speed: number | null
          Auto_mode: boolean | null
          Auto_start: boolean | null
          Auto_stop: boolean | null
          Blower_speed: number | null
          Compressor_timer: number | null
          Continuous_mode: boolean | null
          created_at: string | null
          Fault_code: number | null
          Hot_valve_speed: number | null
          HP_value: number | null
          id: number
          LP_value: number | null
          Manual_mode: boolean | null
          Running_time_hour: number | null
          Running_time_minute: number | null
          T0_1_air_outlet_temp: number | null
          T0_2_air_outlet_temp: number | null
          T1_1_cold_air_temp: number | null
          T1_2_cold_air_temp: number | null
          T2_1_ambient_temp: number | null
          T2_2_ambient_temp: number | null
          TH_1_supply_air_temp: number | null
          TH_2_supply_air_temp: number | null
        }
        Insert: {
          Aeration_duration_set?: number | null
          Aeration_mode?: boolean | null
          Aeration_start?: boolean | null
          Aeration_stop?: boolean | null
          AHT_vale_speed?: number | null
          Auto_mode?: boolean | null
          Auto_start?: boolean | null
          Auto_stop?: boolean | null
          Blower_speed?: number | null
          Compressor_timer?: number | null
          Continuous_mode?: boolean | null
          created_at?: string | null
          Fault_code?: number | null
          Hot_valve_speed?: number | null
          HP_value?: number | null
          id?: number
          LP_value?: number | null
          Manual_mode?: boolean | null
          Running_time_hour?: number | null
          Running_time_minute?: number | null
          T0_1_air_outlet_temp?: number | null
          T0_2_air_outlet_temp?: number | null
          T1_1_cold_air_temp?: number | null
          T1_2_cold_air_temp?: number | null
          T2_1_ambient_temp?: number | null
          T2_2_ambient_temp?: number | null
          TH_1_supply_air_temp?: number | null
          TH_2_supply_air_temp?: number | null
        }
        Update: {
          Aeration_duration_set?: number | null
          Aeration_mode?: boolean | null
          Aeration_start?: boolean | null
          Aeration_stop?: boolean | null
          AHT_vale_speed?: number | null
          Auto_mode?: boolean | null
          Auto_start?: boolean | null
          Auto_stop?: boolean | null
          Blower_speed?: number | null
          Compressor_timer?: number | null
          Continuous_mode?: boolean | null
          created_at?: string | null
          Fault_code?: number | null
          Hot_valve_speed?: number | null
          HP_value?: number | null
          id?: number
          LP_value?: number | null
          Manual_mode?: boolean | null
          Running_time_hour?: number | null
          Running_time_minute?: number | null
          T0_1_air_outlet_temp?: number | null
          T0_2_air_outlet_temp?: number | null
          T1_1_cold_air_temp?: number | null
          T1_2_cold_air_temp?: number | null
          T2_1_ambient_temp?: number | null
          T2_2_ambient_temp?: number | null
          TH_1_supply_air_temp?: number | null
          TH_2_supply_air_temp?: number | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: number
          order_id: number | null
          product_id: number | null
          quantity: number | null
          unit_price: number | null
        }
        Insert: {
          id: number
          order_id?: number | null
          product_id?: number | null
          quantity?: number | null
          unit_price?: number | null
        }
        Update: {
          id?: number
          order_id?: number | null
          product_id?: number | null
          quantity?: number | null
          unit_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          customer_id: number | null
          id: number
          order_date: string | null
          status: string | null
        }
        Insert: {
          customer_id?: number | null
          id: number
          order_date?: string | null
          status?: string | null
        }
        Update: {
          customer_id?: number | null
          id?: number
          order_date?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category_id: number | null
          id: number
          name: string | null
          price: number | null
        }
        Insert: {
          category_id?: number | null
          id: number
          name?: string | null
          price?: number | null
        }
        Update: {
          category_id?: number | null
          id?: number
          name?: string | null
          price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sheet_data: {
        Row: {
          Clients: string | null
          Email: string | null
          id: number
          "No. of Products": number | null
          Price: string | null
          Status: string | null
        }
        Insert: {
          Clients?: string | null
          Email?: string | null
          id?: number
          "No. of Products"?: number | null
          Price?: string | null
          Status?: string | null
        }
        Update: {
          Clients?: string | null
          Email?: string | null
          id?: number
          "No. of Products"?: number | null
          Price?: string | null
          Status?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      get_list_of_tables_and_columns: {
        Row: {
          columns_with_types_and_fks: string | null
          table_name: unknown | null
          table_schema: unknown | null
        }
        Relationships: []
      }
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      match_documents: {
        Args: { filter?: Json; match_count?: number; query_embedding: string }
        Returns: {
          content: string
          id: number
          metadata: Json
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
