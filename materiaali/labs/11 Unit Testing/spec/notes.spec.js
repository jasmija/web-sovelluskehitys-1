describe('notes module', function () {

    beforeEach(function() {
        notes.clear();
        notes.add('first note');
        notes.add('second note');
        notes.add('third note');
        notes.add('fourth note');
        notes.add('fifth note');
    });

    //ADD
    it("should be able to add a new note", function () {
        expect(notes.add('sixth note')).toBe(true);
        expect(notes.count()).toBe(6);
    });

    it("should ignore blank notes", function () {
        expect(notes.add('')).toBe(false);
        expect(notes.count()).toBe(5);
    });

    it('should ignore notes containing only whitespace', function() {
        expect(notes.add('')).toBe(false);
        expect(notes.count()).toBe(5);
    });

    it('should require a string parameter', function() {
        expect(notes.add("")).toBe(false);
        expect(notes.count()).toBe(5);
    });

    //REMOVE
    it('should remove first index', function() {
        expect(notes.remove(0)).toBe(true);
        expect(notes.count()).toBe(4);
    });

    it('should remove index out of range', function() {
        expect(notes.remove(7)).toBe(true);
        expect(notes.count()).toBe(5);
    });

    it('should not pass a parameter to remove', function() {
        expect(notes.remove(null)).toBe(false);
        expect(notes.count()).toBe(5);
    });

    //FIND
    it('should search for note', function() {
        expect(notes.find('note')).toBe(true);
        //expect(notes.count()).toBe(5);
    });

    it('should search for Note', function() {
        expect(notes.find('Note')).toBe(false);
        //expect(notes.count()).toBe(5);
    });

    it('should search for th', function() {
        expect(notes.find('th')).toBe(true);
        //expect(notes.count()).toBe(5);
    });

    it('should search for six', function() {
        expect(notes.find('six')).toBe(false);
        //expect(notes.count()).toBe(5);
    });

    //OWN TESTS
    it('should remove all notes', function() {
        expect(notes.clear()).toBe(true);
        expect(notes.count()).toBe(0);
    });

});