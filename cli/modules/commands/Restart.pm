package Restart;

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
    print "Restarting storefront at $dir...\n";
    system("bun run $dir/src/index.ts &") == 0
        or die "Failed to restart storefront: $!\n";
    print "Storefront restarted successfully\n";
}

1;