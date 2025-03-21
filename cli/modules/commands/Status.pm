package Status;

use strict;
use warnings;

sub new {
    my ($class, $commander) = @_;
    my $self = { commander => $commander };
    bless $self, $class;
    return $self;
}

sub execute {
    my ($self) = @_;
    my $dir = $self->{commander}->{current_dir};
    print "Storefront Directory: $dir\n";
    my $config_file = "$dir/config.json";
    if (-e $config_file) {
        print "Configuration Found: Yes\n";
    } else {
        print "Configuration Found: No\n";
    }
}

1;