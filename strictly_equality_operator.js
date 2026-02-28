// === checks equality without converting types — both type and value must match exactly.

// (!== ) checks if two values are not strictly equal — meaning either their value or their type differs.
5 != "5"   // false  (coercion happens)
5 !== "5"  // true   (no coercion)