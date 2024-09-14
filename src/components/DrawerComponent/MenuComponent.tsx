import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use Ionicons for chevron icons
import Menu from './Menu';
const MenuComponent = () => {
    const [openSections, setOpenSections] = useState<number[]>([]);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null); // Track hovered menu item
  
    const toggleSection = (id: number) => {
      setOpenSections((prev) =>
        prev.includes(id) ? prev.filter((sectionId) => sectionId !== id) : [...prev, id]
      );
    };
  
    return (
      <View style={styles.container}>
        {Menu.map((menuItem) => (
          <View key={menuItem.id}>
            <TouchableOpacity
              style={styles.menuHeader}
              onPressIn={() => setHoveredItem(menuItem.id)}  // Start hover effect
              onPressOut={() => setHoveredItem(null)}       // End hover effect
              onPress={() => toggleSection(menuItem.id)}
            >
              <Text 
                style={[
                  styles.menuText, 
                  hoveredItem === menuItem.id && { color: '#FF0000' } // Apply hover color
                ]}
              >
                {menuItem.menu}
              </Text>
              {openSections.includes(menuItem.id) ? (
                <Icon name="chevron-up-outline" size={25} color="#666CB2" />  
              ) : (
                <Icon name="chevron-down-outline" size={25} color="#666CB2" />  
              )}
            </TouchableOpacity>
            {openSections.includes(menuItem.id) && (
              <View style={styles.submenuContainer}>
                {menuItem.submenu.map((subItem, index) => (
                  <View key={index} style={styles.submenuItem}>
                    {subItem.icon}
                    <Text style={styles.submenuText}>{subItem.name}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submenuContainer: {
    padding: 20,
  },
  submenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  submenuText: {
    marginLeft: 8,
    fontSize: 14,
  },
});

export default MenuComponent;
