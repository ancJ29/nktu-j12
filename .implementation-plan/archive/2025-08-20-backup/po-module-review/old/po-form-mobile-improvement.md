# PO Form Mobile UI Improvement Plan

## Current Issues

### 1. Table-based Layout (POItemsEditor)
- **8 columns** in a table - requires constant horizontal scrolling
- **Inline editing** in cramped table cells - difficult to tap accurately
- **Small inputs** (size="xs") - below recommended 44px touch target size
- **Complex interactions** - users struggle with adding/editing items

### 2. Form Usability
- **Add item row** at bottom of table - easily missed
- **Unsaved item warning** - good but came after user frustration
- **No visual hierarchy** - all fields appear equally important

## Design Improvements

### Mobile Layout Strategy

#### 1. Replace Table with Card Layout (Mobile Only)
```tsx
// Mobile: Each item as a card
<Stack gap="md">
  {items.map((item) => (
    <POItemCard 
      key={item.id}
      item={item}
      onUpdate={handleUpdateItem}
      onRemove={handleRemoveItem}
    />
  ))}
</Stack>
```

#### 2. Card Design for Items
```
┌─────────────────────────────────────┐
│ Product: ABC-123                    │
│ Electronics Widget                   │
│                                      │
│ Qty: [2] × Price: [$100.00]         │
│ Discount: [10%]                     │
│ ──────────────────                  │
│ Total: $180.00          [🗑️ Delete] │
└─────────────────────────────────────┘
```

#### 3. Floating Action Button for Add Item
- **Prominent FAB** at bottom-right with "+" icon
- Opens **modal/drawer** for adding new items
- Clear visual separation from existing items

#### 4. Add Item Modal/Drawer Design
```
┌─────────────────────────────────────┐
│ Add New Item                    [X] │
├─────────────────────────────────────┤
│                                     │
│ Product Code *                      │
│ [____________________] [🔍 Search]  │
│                                     │
│ Description *                       │
│ [_________________________________] │
│                                     │
│ Category                            │
│ [Select Category ▼]                 │
│                                     │
│ Quantity *                          │
│ [-] [___1___] [+]                   │
│                                     │
│ Unit Price *                        │
│ [_____________]                     │
│                                     │
│ Discount (%)                        │
│ [___0___]                           │
│                                     │
│ ──────────────────                  │
│ Total: $0.00                        │
│                                     │
│ [Cancel]           [Add to Order]   │
└─────────────────────────────────────┘
```

### Implementation Approach

#### Phase 1: Create Mobile Components
1. `POItemCard` - Mobile-friendly item display
2. `POAddItemModal` - Dedicated add item interface
3. `POItemsEditorMobile` - Mobile version of items editor

#### Phase 2: Responsive Switching
```tsx
function POItemsEditor({ ... }) {
  const { isMobile } = useDeviceType();
  
  if (isMobile) {
    return <POItemsEditorMobile {...props} />;
  }
  
  return <POItemsEditorDesktop {...props} />;
}
```

#### Phase 3: Enhanced Touch Interactions
- **Swipe to delete** - Swipe left on card to reveal delete button
- **Pull to refresh** - Update product list
- **Tap to expand** - Show optional fields (category, discount)
- **Stepper buttons** - +/- for quantity adjustment

### Key Mobile Improvements

1. **Larger Touch Targets**
   - Minimum 44x44px for all interactive elements
   - Use size="md" or "lg" for inputs on mobile
   - Proper spacing between elements

2. **Progressive Disclosure**
   - Show essential fields by default
   - Optional fields in collapsible section
   - Smart defaults (quantity: 1, discount: 0)

3. **Visual Hierarchy**
   - Product name prominent
   - Total price clearly visible
   - Secondary info de-emphasized

4. **Reduced Cognitive Load**
   - One item at a time focus
   - Clear add/edit/delete actions
   - Immediate visual feedback

5. **Native Mobile Patterns**
   - Bottom sheets for add/edit
   - FAB for primary action
   - Swipe gestures for delete
   - Native number keyboards

### Quick Wins (Immediate Improvements)

Without major refactoring:

1. **Increase input sizes** on mobile
   ```tsx
   size={isMobile ? 'md' : 'xs'}
   ```

2. **Hide less important columns** on mobile
   - Show only: Product, Qty, Price, Total
   - Put Category, Discount in expandable section

3. **Sticky Add Button**
   ```tsx
   {isMobile && (
     <Affix position={{ bottom: 20, right: 20 }}>
       <ActionIcon 
         size="xl" 
         radius="xl" 
         color="blue"
         onClick={openAddModal}
       >
         <IconPlus size={24} />
       </ActionIcon>
     </Affix>
   )}
   ```

4. **Responsive Table** (temporary fix)
   - Make table horizontally scrollable
   - Add visual indicator for scrolling
   - Freeze first column (product)

### Testing Considerations

1. Test on various screen sizes (320px - 428px width)
2. Test with keyboard open (reduces viewport)
3. Test landscape orientation
4. Test with accessibility tools (VoiceOver, TalkBack)
5. Test with one-handed use
6. Test with gloves/wet fingers

### Success Metrics

- Reduced time to add items (target: <30s per item)
- Reduced error rate (mis-taps, wrong inputs)
- Increased completion rate on mobile
- Positive user feedback on mobile usability

### Next Steps

1. Review and approve design
2. Create mobile-specific components
3. Implement responsive switching
4. User testing with mobile devices
5. Iterate based on feedback