// RamRoutes Brand Colors Configuration
// This file contains all the brand colors used throughout the application
// Update these values to change the color scheme globally

export const colors = {
  // Primary brand colors
  primary: '#935940',      // Brown - main brand color
  secondary: '#2E3652',    // Dark blue - secondary brand color
  
  // Text colors
  text: {
    primary: '#262626',    // Dark gray for primary text
    secondary: '#666666',  // Medium gray for secondary text
    light: '#999999',      // Light gray for disabled/muted text
    white: '#ffffff',      // White text
    black: '#000000'       // Black text
  },
  
  // Background colors
  background: {
    primary: '#ffffff',    // White background
    secondary: '#f8f9fa',  // Light gray background for sections
    card: '#f9f9f9',       // Card background
    disabled: '#f0f0f0'    // Disabled button background
  },
  
  // Border colors
  border: {
    primary: '#935940',    // Primary border color
    secondary: '#2E3652',  // Secondary border color
    light: '#d9d9d9',      // Light border
    disabled: '#d9d9d9'    // Disabled border
  },
  
  // Status colors (keeping standard Ant Design colors for consistency)
  status: {
    success: '#52c41a',    // Green for success states
    warning: '#faad14',    // Orange for warning states
    error: '#ff4d4f',      // Red for error states
    info: '#1890ff'        // Blue for info states
  }
}

// Convenience exports for commonly used colors
export const PRIMARY_COLOR = colors.primary
export const SECONDARY_COLOR = colors.secondary
export const WHITE = colors.background.primary
export const LIGHT_GRAY = colors.background.secondary

export default colors
