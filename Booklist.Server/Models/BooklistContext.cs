using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;
namespace Booklist.Models
{
    public class DataContext : DbContext
    {
        public DataContext()
        { }
        public DbSet<Book> Books { get; set; } = null!;
        public DbSet<States> States { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>()
                .HasMany(e => e.States)
                .WithOne(e => e.Book)
                .HasForeignKey(e => e.Books_Id)
                .HasPrincipalKey(e => e.Id);
        }
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
    }
    public class Book
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public string Id { get; set; } = Guid.NewGuid().ToString().ToUpper();
        public int Id { get; set; } = 0;
        public string Author { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Comment { get; set; } = string.Empty;
        public int State { get; set; } = 0;
        public ICollection<States> States { get; }
    }
    public class States
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        //public string Id { get; set; } = Guid.NewGuid().ToString().ToUpper();
        public int Id { get; set; } = 0;
        //public string Books_Id { get; set; } = string.Empty;
        public int Books_Id { get; set; } = 0;
        public int State { get; set; } = 0;
        public DateTime ChangeState { get; set; } = DateTime.Now;
        public Book Book { get; set; }
    }
}
