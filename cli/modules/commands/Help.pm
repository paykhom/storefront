package Help;

use strict;
use warnings;

sub new {
    my ($class, $commander) = @_;
    my $self = { commander => $commander };
    bless $self, $class;
    return $self;
}

sub execute {
    print <<'END';
Usage: ./cli/commander <command>

Commands:
  update    Update this storefront to the latest version
  status    Check the status of this storefront
  restart   Restart this storefront's server
  help      Show this help message
END
}

1;